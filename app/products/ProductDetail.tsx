import { IProduct } from '@/models/IAllProducts'
import { singleProduct } from '@/services/productService'
import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const ProductDetail = () => {

  const [proItem, setProItem] = useState<IProduct>()  
  const route = useRoute()
  const obj = route.params! as {item: IProduct}

  useEffect(() => {
    singleProduct(obj.item.id).then(res => {
        const item = res.data.data
        setProItem(item)
    })
  }, [])
    
  return (
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled" automaticallyAdjustKeyboardInsets>
        { proItem && 
            <View style={styles.container}>
                <Text style={styles.title}>{proItem.title}</Text>
                <Image  />
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
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
  }
})