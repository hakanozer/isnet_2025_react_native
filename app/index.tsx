import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

// import User Pages
import Login from "./Login";
import Register from "./Register";

const MainStack = createNativeStackNavigator();

// User Stack Navigator
const UserLoginStack = () => (
<MainStack.Navigator>
  <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  <MainStack.Screen name="Register" component={Register} options={{ headerShown: true }} />
</MainStack.Navigator>
)

export default function Index() {

  return (
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="UserLoginStack" component={UserLoginStack}  />
      </MainStack.Navigator>
  )

}

const styles = StyleSheet.create({})