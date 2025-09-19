import { IProduct } from '@/models/IAllProducts'
import { allProducts } from '@/services/productService'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

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
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled" automaticallyAdjustKeyboardInsets>
        <View style={styles.container}>
          {proArr.map((item, index) => 
            <Text key={index}>{item.title}</Text>
          )}
        </View>
      </ScrollView>
  )
}

export default Product

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
})