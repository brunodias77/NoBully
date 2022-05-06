import React from "react";
import logo from "../../assets/Logo.png";
import { useNavigation } from "@react-navigation/core";
import { Image } from "react-native";
import Button from "../../components/Button/index";
import { Container, Header, Title, Content, Footer } from "./styles";

const Initial: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={logo} style={{ marginBottom: 100 }}></Image>
      <Header>
        <Title>Seja{"\n"}Bem-vindo</Title>
        <Content>O que você deseja fazer</Content>
      </Header>
      <Footer>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Cadastro"
          color="#29292e"
          onPress={() => navigation.navigate("Register")}
        />
      </Footer>
    </Container>
  );
};

export default Initial;
