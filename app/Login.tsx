import CustomButton from "@/components/CustomButton";
import { userLogin } from "@/services/userService";
import { storeUser } from "@/utils/storeUser";
import { validateEmail } from "@/utils/util";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from 'react-native-toast-message';

const Login = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('hakanozer02@gmail.com');
  const [password, setPassword] = useState('123456');

  const sendLogin = () => {
    if (!validateEmail(email)) {
      Toast.show({
        type: 'error',
        text1: 'E-Mail field is required.',
      });
    }else if (password.length < 5) {
      Toast.show({
        type: 'error',
        text1: 'Password must be at least 6 characters long.',
      });
    } else {
      userLogin(email, password).then(res => {
        // işlem 200 olduğunda
        const dt = res.data
        storeUser(dt).then(() => {
          // redirect - products
        })
      }).catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Incorrect email or password.'
        })
      })
    }
  }
  const emailChange = (text: string) => {
    //console.log(text);
    //setEmail(text);
  }

  useEffect(() => {
    //console.log('Component mounted', email);
  }, [email]);

  const gotoRegister = () => {
    //navigation.navigate('Register' as never); // Geri dönülebilir
    navigation.dispatch(StackActions.push('Register')); // Geri dönülebilir
    //navigation.dispatch(StackActions.replace('Register')); // Replace ile geri dönülemez
  }


  return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled" automaticallyAdjustKeyboardInsets>
        <View style={styles.container}>
          <Image source={require('../assets/images/icn_apple.png')} style={{ width: 100, height: 100, marginBottom: 20 }} />
          <Text style={styles.title}>User Login</Text>
          <TextInput defaultValue={email} autoComplete="email" onChangeText={(text) => { setEmail(text) }} placeholder="E-Mail" autoCapitalize="none" keyboardType="email-address" style={styles.input} />
          <TextInput defaultValue={password} autoComplete="password" onChangeText={(text) => { setPassword(text) }} placeholder="Password" autoCapitalize="none" secureTextEntry style={styles.input} />
          <View style={styles.buttonGroup}>
            <CustomButton title="Login" onPressFnc={sendLogin} />
            <CustomButton title="Register" onPressFnc={gotoRegister} />
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Login

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: '600',
    color: '#333333'
  },
  input: {
    marginTop: 20,
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000000'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20
  }
})