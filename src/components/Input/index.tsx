import React, { useState } from "react";
import { TextInputProps, Alert } from "react-native";
import { Container, InputText, IconContainer } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Props extends TextInputProps {
  iconName: string;
  sizeIcon: number;
  color: string;
  placeholder?: string;
  value?: string;
}

const Input: React.FC<Props> = ({
  iconName,
  sizeIcon,
  color,
  placeholder,
  keyboardType,
  value,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  function handleInputFocused() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
  }
  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Icon
          name={iconName}
          size={sizeIcon}
          color={isFocused ? "#DC1637" : color}
        />
      </IconContainer>
      <InputText
        onChangeText={onChangeText}
        value={value}
        isFocused={isFocused}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </Container>
  );
};

export default Input;
