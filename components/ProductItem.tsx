import { IProduct } from '@/models/IAllProducts'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const w = Dimensions.get("window").width
const ProductItem = (props: {item: IProduct}) => {
  return (
    <TouchableOpacity>
        <View style={styles.container}>
            <Image source={{ uri: props.item.images[0] }} style={styles.image}   />
            <View style={styles.info}>
                <Text numberOfLines={2} style={styles.title}>{props.item.title}</Text>
                <Text style={styles.price}>{props.item.price}₺</Text>
            </View>
        </View>
        
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        borderColor: '#979797ff'
    },
    image: {
        width: 100,
        height: 100,
    },
    info: {
        marginLeft: 5,
        flexGrow: 1,
        marginRight: 5,
    },
    title: {
        flexShrink: 1,
        fontSize: 19,
        width: w - 165,
    },
    price: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    }
})