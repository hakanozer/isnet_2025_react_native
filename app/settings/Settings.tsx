import { userLogout } from '@/services/userService';
import { deleteUser } from '@/utils/storeUser';
import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useEffect } from 'react';
import { ActionSheetIOS, Alert, Linking, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Hoshi } from 'react-native-textinput-effects';


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
    { id: 1, title: 'Topkapı Sarayı Müzesi', description: 'Description A', latitude: 41.015137, longitude: 28.979530, phone: '+902125120400' },
    { id: 2, title: 'Sultan Ahmet Cami', description: 'Description B', latitude: 41.012345, longitude: 28.975678, phone: '+902125181840' },
    { id: 3, title: 'Galataport İstanbul', description: 'Description C', latitude: 41.012365, longitude: 28.981345, phone: '+902125120400' },
  ];

  return (
    <View style={styles.safeArea}>
      <StatusBar animated={true} />
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled" automaticallyAdjustKeyboardInsets>
        <View style={styles.container}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Şirketler Haritası</Text>
            <MapView
            style={styles.map}
            zoomEnabled={true}
            zoomControlEnabled={true}
            showsScale={true}
            showsTraffic={true}
            region={{
              latitude: companies.reduce((sum, c) => sum + c.latitude, 0) / companies.length,
              longitude: companies.reduce((sum, c) => sum + c.longitude, 0) / companies.length,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            //onRegionChange={(region) => { console.log(region) }}
            onRegionChangeComplete={(region) => { console.log(region) }}
            >
            {companies.map(company => (
              <Marker
              key={company.id}
              coordinate={{ latitude: company.latitude, longitude: company.longitude }}
              title={company.title}
              description={company.description}
              onPress={() => 
                Linking.openURL('maps://app?daddr=' + company.latitude + ',' + company.longitude + '&directionsmode=driving')
              }
              />
            ))}
            </MapView>

            <Hoshi
              label={'Name'}
              borderHeight={1}
              borderColor={'#514f50ff'}
              inputPadding={16}
              style={{ marginTop: 20 }}
              labelStyle={{ color: '#514f50ff' }}
              inputStyle={{ color: '#000000ff' }}
              // onChangeText={(text) => this.setState({ name: text })}
            />
            <Hoshi
              label={'Surname'}
              borderHeight={1}
              borderColor={'#514f50ff'}
              inputPadding={16}
              style={{ marginTop: 20 }}
              labelStyle={{ color: '#514f50ff' }}
              inputStyle={{ color: '#000000ff' }}
              // onChangeText={(text) => this.setState({ name: text })}
            />
            <Hoshi
              label={'E-Mail'}
              borderHeight={1}
              borderColor={'#514f50ff'}
              inputPadding={16}
              style={{ marginTop: 20 }}
              labelStyle={{ color: '#514f50ff' }}
              inputStyle={{ color: '#000000ff' }}
              // onChangeText={(text) => this.setState({ name: text })}
            />
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
    paddingBottom: 20,
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