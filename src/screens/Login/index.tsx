import React from "react";

import {
  Container,
  Divider,
  ForgotText,
  InputsContainer,
  LoginButton,
  LoginButtonText,
  LoginText,
  NewAccountButtonText,
  NewAccountContainer,
  NewAccountText,
  NikeLogo,
  SeparatorContainer,
  SeparatorText,
  SocialButtonsContainer,
  WelcomeContainer,
  WelcomeText,
} from "./styles";
import Input from "../../components/Input";
import SocialLoginButton from "../../components/SocialLoginButton";

const Login: React.FC = () => {
  const logo = require("../../assets/img/nikelogo.png");

  return (
    <Container>
      <WelcomeContainer>
        <NikeLogo source={logo} resizeMode="contain" />
        <WelcomeText>Bem vindo a Nike</WelcomeText>
        <LoginText>Faça o login para continuar</LoginText>
      </WelcomeContainer>

      <InputsContainer>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
      </InputsContainer>

      <LoginButton>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>

      <SeparatorContainer>
        <Divider />
        <SeparatorText>Ou</SeparatorText>
        <Divider />
      </SeparatorContainer>

      <SocialButtonsContainer>
        <SocialLoginButton name="Google" />
        <SocialLoginButton name="Facebook" />
      </SocialButtonsContainer>

      <ForgotText>Esqueceu sua senha?</ForgotText>

      <NewAccountContainer>
        <NewAccountText>Não tem uma conta? </NewAccountText>
        <NewAccountButtonText>Registre-se</NewAccountButtonText>
      </NewAccountContainer>
    </Container>
  );
};

export default Login;
