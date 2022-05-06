import React, { useState } from "react";
import * as Yup from "yup";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import { Container, Title, Header, SubTitle, Form } from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>Estamos{"\n"}quase lá.</Title>
            <SubTitle>
              Faça seu login para tornar{"\n"}a escola um lugar melhor.
            </SubTitle>
          </Header>
          <Input />
          <Button loading={false} title="Login" />
          <Button
            titleColor="#7A7A80"
            color=" #F4F5F6"
            loading={false}
            title="Esqueci minha senha"
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
