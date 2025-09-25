import ProductItem from '@/components/ProductItem'
import { IProduct } from '@/models/IAllProducts'
import { singleProduct } from '@/services/productService'
import { allLikes } from '@/utils/storeLikes'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

const Likes = () => {

  const navigation = useNavigation()
  const [proArr, setProArr] = useState<IProduct[]>([])
  useEffect(() => {
    navigation.setOptions({ title: 'Likes' })
    allLikes().then(arr => {
      axios.all(arr.map(id => singleProduct(id))).then(arrRes => {
        const newArr: IProduct[] = arrRes.map(item => item.data.data)
        setProArr(newArr)
      })
    })
  }, [])

    
  return (
    <View style={styles.container}>
      <FlatList 
        data={proArr}
        renderItem={ ({item, index}) =>
          <ProductItem item={item} key={item.id} />
        }
      />
    </View>
  )
}

export default Likes

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
})