import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Toast from 'react-native-toast-message';

// import User Pages
import React from "react";
import Login from "./login/Login";
import Register from "./login/Register";

// import Product Pages
import Product from "./products/Product";

// import Likes Pages
import Likes from "./likes/Likes";

// import Settings Pages
import Settings from "./settings/Settings";


const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

// User Stack Navigator
const UserLoginStack = () => (
<MainStack.Navigator>
  <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  <MainStack.Screen name="Register" component={Register} options={{ headerShown: true }} />
</MainStack.Navigator>
)

// Product Stack Navigator
const ProductStack = () => (
<MainStack.Navigator>
  <MainStack.Screen name="Product" component={Product} options={{ headerShown: true }} />
</MainStack.Navigator>
)

// Product Stack Navigator
const LikesStack = () => (
<MainStack.Navigator>
  <MainStack.Screen name="Likes" component={Likes} options={{ headerShown: false }} />
</MainStack.Navigator>
)

// Product Stack Navigator
const SettingsStack = () => (
<MainStack.Navigator>
  <MainStack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
</MainStack.Navigator>
)

const MainTab = () => (
  <Tab.Navigator
    initialRouteName='ProductStack'
    screenOptions={{
      tabBarActiveTintColor: '#349bf5ff',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { height: 50, paddingBottom: 5 },
      tabBarLabelStyle: { fontSize: 15 },
    }}>
    <Tab.Screen 
      options={{ 
        headerShown: false,
        tabBarLabel: 'Products',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="basket-outline" size={30} color={color} />
        ),
      }}
      name="ProductStack"
      component={ProductStack}
    />
    <Tab.Screen 
      options={{ 
        headerShown: false,
        tabBarLabel: 'Likes',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="heart-o" size={30} color={color} />
        ),
      }}
      name="LikesStack"
      component={LikesStack}
    />
    <Tab.Screen 
      options={{ 
        headerShown: false,
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings-outline" size={30} color={color} />
        ),
      }}
      name="SettingsStack"
      component={SettingsStack}
    />
  </Tab.Navigator>
)

export default function Index() {

  return (
    <React.Fragment>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="UserLoginStack" component={UserLoginStack}  />
        <MainStack.Screen name="MainTab" component={MainTab}  />
      </MainStack.Navigator>
      <Toast />
    </React.Fragment>
  )

}

const styles = StyleSheet.create({})