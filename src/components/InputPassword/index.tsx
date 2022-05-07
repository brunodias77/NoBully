import React, { useState } from "react";
import {
  Container,
  IconContainer,
  InputText,
  ChangePasswordVisibilityButton,
} from "./styles";
import { TextInputProps } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Props extends TextInputProps {
  iconName: string;
  sizeIcon: number;
  color: string;
  placeholder?: string;
}

const PasswordInput: React.FC<Props> = ({
  iconName,
  sizeIcon,
  color,
  placeholder,
  keyboardType,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  const [isPassworsVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocused() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
  }

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible((isPassworsVisible) => !isPassworsVisible);
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
        isFocused={isFocused}
        placeholder={placeholder}
        secureTextEntry={isPassworsVisible}
        onBlur={handleInputBlur}
        onFocus={handleInputFocused}
        value={value}
        onChangeText={onChangeText}
      />
      <ChangePasswordVisibilityButton
        isFocused={isFocused}
        onPress={handlePasswordVisibilityChange}
      >
        <Icon
          name={isPassworsVisible ? "eye-outline" : "eye-off-outline"}
          size={sizeIcon}
          color={color}
        />
      </ChangePasswordVisibilityButton>
    </Container>
  );
};

export default PasswordInput;
