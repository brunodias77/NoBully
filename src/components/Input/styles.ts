import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
  background-color: #f2f2fa;
  height: 56px;
  border-width: 2px;
  border-color: transparent;
`;
export const ContainerIcon = styled.View``;

export const InputText = styled.TextInput<Props>`
  flex: 1;
  padding: 0 20px;
  color: #7a7a80;
  font-size: ${RFValue(15)}px;
  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #dc1637;
    `};
`;
