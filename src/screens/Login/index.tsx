import React from "react";
import * as Yup from "yup";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { Container, Title, Header, SubTitle, Form } from "./styles";
import Button from "../../components/Button/index";
const Login: React.FC = () => {
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
          {/* <Form>
            <Input
              iconName="email-outline"
              sizeIcon={30}
              color="#7A7A80"
              placeholder="E-Mail"
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              placeholder="Senha"
              color="#7A7A80"
              iconName="lock-outline"
              sizeIcon={30}
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
          </Form> */}

          <Button loading={false} title="Login" />
          <Button
            titleColor="#7A7A80"
            color=" #F4F5F6"
            loading={false}
            title="Esqueci minha senha"
            onPress={() => {}}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
