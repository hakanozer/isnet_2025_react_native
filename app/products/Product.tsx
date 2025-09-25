import ProductItem from '@/components/ProductItem'
import { IProduct } from '@/models/IAllProducts'
import { allProducts } from '@/services/productService'
import { eLikes, ILikesAction } from '@/useRedux/likesReducer'
import { allLikes } from '@/utils/storeLikes'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

const Product = () => {

  const dispatch = useDispatch()

  const [txt, setTxt] = useState('Loading...')
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [proArr, setProArr] = useState<IProduct[]>([])
  const navigation = useNavigation()
  
  useEffect(() => {
    navigation.setOptions({ title: 'Products' })
    allProducts(page).then(res => {
      setTotalPage(res.data.meta.pagination.total_pages)
      const newArr = [...proArr, ...res.data.data]
      setProArr(newArr)
    }).catch(err => {
      console.log(err)
    })

    allLikes().then(arr => {
      const sendObj: ILikesAction= {
        type: eLikes.LIKES_LIST,
        payload: arr
      }
      dispatch(sendObj)
    })

  }, [page])

  return (
    <View style={styles.container}>
      <FlatList 
        data={proArr}
        renderItem={ ({item, index}) =>
          <ProductItem item={item} key={item.id} />
        }
        onEndReached={() => totalPage > page ? setPage(page + 1) : setTxt("Finish..") }
        ListFooterComponent={<Text>{txt}</Text>}
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