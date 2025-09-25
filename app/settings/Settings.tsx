import React, { useEffect } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

const Settings = () => {


  useEffect(() => {
  }, [])

  return (
    <View style={styles.safeArea}>
      <StatusBar animated={true} />
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled" automaticallyAdjustKeyboardInsets>
        <View style={styles.container}>
          <Text>Data</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Settings

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