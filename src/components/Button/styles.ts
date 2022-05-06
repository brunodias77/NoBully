import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps {
  color?: string;
  titleColor?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  background: ${({ color }) => (color ? color : "#dc1637")};
  padding: 18px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<ButtonProps>`
  color: ${({ titleColor }) => (titleColor ? titleColor : "#fff")};
  font-size: ${RFValue(15)}px;
`;
