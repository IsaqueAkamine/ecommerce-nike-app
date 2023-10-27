import React from "react";

import {
  AccountButtonText,
  AccountContainer,
  AccountText,
  Container,
  InputsContainer,
  LoginButton,
  LoginButtonText,
  LoginText,
  NikeLogo,
  WelcomeContainer,
  WelcomeText,
} from "./styles";
import Input from "../../components/Input";

const SignUp: React.FC = () => {
  const logo = require("../../assets/img/nikelogo.png");

  return (
    <Container>
      <WelcomeContainer>
        <NikeLogo source={logo} resizeMode="contain" />
        <WelcomeText>Bem vindo a Nike</WelcomeText>
        <LoginText>Crie sua conta para continuar</LoginText>
      </WelcomeContainer>

      <InputsContainer>
        <Input placeholder="Seu nome" type="user" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Input placeholder="Confirme sua senha" type="password" />
      </InputsContainer>

      <LoginButton>
        <LoginButtonText>Criar conta</LoginButtonText>
      </LoginButton>

      <AccountContainer>
        <AccountText>Já tem uma conta? </AccountText>
        <AccountButtonText>Faça o login</AccountButtonText>
      </AccountContainer>
    </Container>
  );
};

export default SignUp;
