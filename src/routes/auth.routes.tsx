import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Initial from "../screens/Initial/index";
import Login from "../screens/Login/index";
import Register from "../screens/Register/index";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Inital" screenOptions={{ headerShown: false }}>
      <Screen name="Initial" component={Initial} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
