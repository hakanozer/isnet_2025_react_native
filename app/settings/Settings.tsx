import { userLogout } from '@/services/userService';
import { deleteUser } from '@/utils/storeUser';
import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useEffect } from 'react';
import { ActionSheetIOS, Alert, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Settings = () => {

  const navigation = useNavigation();

  // logout function
  const handleLogout = () => {
    // confirm logout question
    // clear user data
    // navigate to login screen
    // ios - android device control
    Platform.OS === 'ios' ?
      ActionSheetIOS.showActionSheetWithOptions(
        {
          title: 'Logout',
          message: 'Are you sure you want to logout?',
          options: ['Cancel', 'Logout'],
          destructiveButtonIndex: 1,
          cancelButtonIndex: 0,
          userInterfaceStyle: 'light',
        },
        (buttonIndex) => {
          if (buttonIndex === 1) {
            // clear user data
            logoutFnc()
          }
        }
      )
      :
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Logout', onPress: () => logoutFnc(), style: 'destructive' }
        ],
        { cancelable: true }
      );
  }

  const logoutFnc = () => {
    // clear user data
    userLogout().then(res => {
      deleteUser().then(resDel => {
        if (resDel) {
          navigation.dispatch(StackActions.replace('UserLoginStack'));
        } 
      })
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
  }, [])

  const companies = [
    { id: 1, title: 'Company A', description: 'Description A', latitude: 41.015137, longitude: 28.979530 },
    { id: 2, title: 'Company B', description: 'Description B', latitude: 41.012345, longitude: 28.975678 },
    { id: 3, title: 'Company C', description: 'Description C', latitude: 41.012365, longitude: 28.981345 },
  ];

  return (
    <View style={styles.safeArea}>
      <StatusBar animated={true} />
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled" automaticallyAdjustKeyboardInsets>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            zoomEnabled={true}
            zoomControlEnabled={true}
            showsScale={true}
            showsTraffic={true}
            initialRegion={{
              latitude: 41.0148755,
              longitude: 28.9652514,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            {companies.map(company => (
              <Marker
                key={company.id}
                coordinate={{ latitude: company.latitude, longitude: company.longitude }}
                title={company.title}
                description={company.description}
              />
            ))}
          </MapView>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutMain}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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
  logoutMain: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#9c9c9cff',
    borderRadius: 10,
    margin: 10,
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: 400,
    marginTop: 20,
  },
})