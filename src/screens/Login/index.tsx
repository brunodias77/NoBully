import React, { useState } from "react";
import * as Yup from "yup";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Input from "../../components/Input/index";
import InputPassword from "../../components/InputPassword/index";
import Button from "../../components/Button/index";
import { Container, Title, Header, SubTitle, Form } from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <Form>
            <Input
              iconName="email-outline"
              sizeIcon={30}
              color="#7A7A80"
              placeholder="E-Mail"
              onChangeText={setEmail}
              value={email}
            />
            <InputPassword
              placeholder="Senha"
              color="#7A7A80"
              iconName="lock-outline"
              sizeIcon={30}
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
          </Form>
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
