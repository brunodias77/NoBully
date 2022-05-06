import React from "react";
import { View } from "react-native";

import { Container, InputText, ContainerIcon } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const Input: React.FC = () => {
  return (
    <Container>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </Container>
  );
};

export default Input;
