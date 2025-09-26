import { StateType } from '@/useRedux/store'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const SettingsHeader = () => {

  const navigation = useNavigation()
  const route = useRoute()

  const likesArr = useSelector((item: StateType) => item.likesReducer)
  const user = useSelector((item: StateType) => item.userReducer)

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.likesTxt}>Likes: {likesArr.length}</Text>
        <Text style={styles.nameTxt}>{user.data.user?.name}</Text>
      </View>
    </View>
  )
}

export default SettingsHeader

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 40,
        backgroundColor: '#5699cfff',
        padding: 8,
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    likesTxt: {
        fontSize: 18,
    },
    nameTxt: {
        fontSize: 18,
    }
})