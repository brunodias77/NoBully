import React, { useState } from "react";
import { Container, Header, Title, SubTitle, Form, CheckBoxs } from "./styles";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Button from "../../components/Button/index";
import Input from "../../components/Input/index";
import InputPassword from "../../components/InputPassword/index";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>Crie sua{"\n"}conta</Title>
            <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil</SubTitle>
          </Header>
          <Form>
            <Input
              iconName="account"
              sizeIcon={30}
              color="#7a7a80"
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <Input
              iconName="email-outline"
              sizeIcon={30}
              color="#7a7a80"
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
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

          <Button title="Cadastrar" />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;
