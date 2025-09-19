import ProductItem from '@/components/ProductItem'
import { IProduct } from '@/models/IAllProducts'
import { allProducts } from '@/services/productService'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

const Product = () => {

  const [page, setPage] = useState(1)
  const [proArr, setProArr] = useState<IProduct[]>([])
  const navigation = useNavigation()
  
  useEffect(() => {
    navigation.setOptions({ title: 'Products' })
    allProducts(page).then(res => {
      setProArr(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
        <View style={styles.container}>
          <FlatList 
            data={proArr}
            renderItem={ ({item, index}) =>
              <ProductItem item={item} key={index} />
            }
          />
        </View>
  )
}

export default Product

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