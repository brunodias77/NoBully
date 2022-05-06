import React from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  loading?: boolean;
  title: string;
  color?: string;
  titleColor?: string;
}

const Button: React.FC<Props> = ({
  loading = false,
  title,
  color,
  titleColor,
  onPress,
}) => {
  return (
    <Container color={color} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Title titleColor={titleColor}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
