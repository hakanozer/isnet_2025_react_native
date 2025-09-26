
import { IUser } from '@/models/IUser';
import apiClient from '@/services/apiConfig';
import { profileMe } from '@/services/userService';
import { eUser, IUserAction } from '@/useRedux/userReducer';
import { getUser } from '@/utils/storeUser';
import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

const Splash = () => {

  const dispatch = useDispatch()
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      getUser().then(user => {
        if (user) {
          profileMe(user.data.access_token).then(res => {
            const us: IUser = {
                meta: res.data.meta,
                data: {
                  access_token: user.data.access_token,
                  token_type: '',
                  expires_in: 0,
                  user: res.data.data as any
                }
            }
            const sendObj: IUserAction = {
                type: eUser.USER_INFO,
                payload: us
            }
            dispatch(sendObj)
          // axios header ayarla jwt interceptor
          apiClient.interceptors.request.use(config => {
            config.headers['Authorization'] = `Bearer ${us.data.access_token}`;
            return config;
          });
            navigation.dispatch(StackActions.replace('MainTab'))
          }).catch(err => {
            navigation.dispatch(StackActions.replace('UserLoginStack'))
          })
        } else {
          navigation.dispatch(StackActions.replace('UserLoginStack'))
        }
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container} >
        <StatusBar hidden />
        <Image source={require('../../assets/images/icn_apple.png')} style={{width: 99, height: 99, resizeMode: 'contain'}} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
    }
})