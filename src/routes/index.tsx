import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Initial from "../screens/Initial";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
