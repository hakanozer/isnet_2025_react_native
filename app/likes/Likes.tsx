import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Likes = () => {

  useEffect(() => {
  }, [])

    
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled" automaticallyAdjustKeyboardInsets>
        <View style={styles.container}>
          <Text>Likes</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Likes

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
})