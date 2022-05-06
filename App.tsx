import React from "react";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";

import { Routes } from "./src/routes";
import Initial from "./src/screens/Initial/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
