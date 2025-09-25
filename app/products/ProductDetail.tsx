import { IProduct } from '@/models/IAllProducts'
import { singleProduct } from '@/services/productService'
import { isLiked, likesAddRemove } from '@/utils/storeLikes'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProductDetail = () => {

  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Product Detail',
    })
  }, [])

  const [isLike, setIsLike] = useState(false)
  const [bigImage, setBigImage] = useState('')
  const [proItem, setProItem] = useState<IProduct>()  
  const route = useRoute()
  const obj = route.params! as {item: IProduct}

  useEffect(() => {
    singleProduct(obj.item.id).then(res => {
        const item = res.data.data
        setBigImage(item.images[0])
        setProItem(item)
        isLiked(item.id).then(status => {
          setIsLike(status)
        })
    })
  }, [])

  const likesControl = (id: number) => {
    likesAddRemove(id).then(() => {
      isLiked(id).then(status => {
          setIsLike(status)
      })
    })
  }
    
  return (
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled" automaticallyAdjustKeyboardInsets>
        { proItem && 
            <View style={styles.container}>
                <Text style={styles.title}>{proItem.title}</Text>
                <Image style={styles.bigImage} source={{uri: bigImage}} />
                <ScrollView contentContainerStyle={{ alignItems: "center" }}  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.imgGroup}>
                        {proItem.images.map((img, index) => 
                            <TouchableOpacity key={index} onPress={() => setBigImage(img)}>
                                <Image style={styles.thumbImage} source={{uri: img}} />
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>
                <Text style={{fontSize: 20, color: '#ff0000', marginTop: 10}}>Price: {proItem.price}₺</Text>
                <Text style={{fontSize: 16, marginTop: 10}}>{proItem.description}</Text>
                <View style={{marginTop: 20, alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => likesControl(proItem.id)} style={{marginBottom: 5}}>
                        <FontAwesome name={isLike === true ? 'heart': 'heart-o'} size={35} color={'#ff0000'} />
                    </TouchableOpacity>
                </View>
                
            </View>
        }
      </ScrollView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#ffffff'
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
  },
  bigImage: {
    width: '100%',
    height: 300
  },
  imgGroup: {
    marginTop: 10,
    flexDirection: 'row',
  },
   thumbImage: {
    width: 88,
    height: 88,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#626262ff',
    marginRight: 5,
    resizeMode: "cover",
  }
})