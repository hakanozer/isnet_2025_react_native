import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const ProductDetail = () => {

  useEffect(() => {
  }, [])
    
  return (
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled" automaticallyAdjustKeyboardInsets>
        <View style={styles.container}>
          <Text>Product Detail</Text>
        </View>
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
  },
})