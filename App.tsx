import React from "react";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";

import { Routes } from "./src/routes";
import Login from "./src/screens/Login/index";

export default function App() {
  return <Routes />;
}
