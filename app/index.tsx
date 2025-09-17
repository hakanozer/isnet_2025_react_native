import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendLogin = () => {
    console.log(email, password)
  }
  
  const emailChange = (text: string) => {
    console.log(text);
    setEmail(text);
  }

  useEffect(() => {
    console.log('Component mounted', email);
  }, [email]);

  return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.title}>User Login</Text>
          <TextInput onChangeText={(text) => { setEmail(text) }} placeholder="E-Mail" autoCapitalize="none" keyboardType="email-address" style={styles.input} />
          <TextInput onChangeText={(text) => { setPassword(text) }} placeholder="Password" autoCapitalize="none" secureTextEntry style={styles.input} />
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={sendLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

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
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600'
  }
})