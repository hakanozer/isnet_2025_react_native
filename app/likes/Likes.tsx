import ProductItem from '@/components/ProductItem'
import { IProduct } from '@/models/IAllProducts'
import { singleProduct } from '@/services/productService'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { StateType } from '../../useRedux/store'

const Likes = () => {

  const likesArr = useSelector((item: StateType) => item.likesReducer)

  const navigation = useNavigation()
  const [proArr, setProArr] = useState<IProduct[]>([])
  useEffect(() => {
    navigation.setOptions({ title: 'Likes' })
      axios.all(likesArr.map(id => singleProduct(id))).then(arrRes => {
        const newArr: IProduct[] = arrRes.map(item => item.data.data)
        setProArr(newArr)
      })
  }, [likesArr])

    
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