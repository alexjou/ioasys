import React, { useContext } from 'react';
import { View } from 'react-native';

import { AuthContext } from '../contexts/auth';
import { navigationRef } from "../utils/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Details from "../pages/Details";

const Stack = createNativeStackNavigator();

const Route = () => {
  const { signed } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer
        ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={signed ? "Home" : "Login"}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Route;
