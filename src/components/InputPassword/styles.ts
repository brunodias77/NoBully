import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 56px;
  margin-bottom: 8px;
  justify-content: center;
  flex-direction: row;
`;
export const IconContainer = styled.View<Props>`
  width: 55px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin-right: 2px;
  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #dc1637;
    `};
`;
export const InputText = styled.TextInput<Props>`
  background-color: #ffffff;
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
export const ChangePasswordVisibilityButton = styled.TouchableOpacity<Props>`
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  padding-right: 18px;
  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #dc1637;
    `};
`;
