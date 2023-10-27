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
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {
  const logo = require("../../assets/img/nikelogo.png");
  const navigation = useNavigation();

  const handleNavigateSignUp = () => {
    navigation.navigate("SignUp");
  };

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
        <NewAccountButtonText onPress={handleNavigateSignUp}>
          Registre-se
        </NewAccountButtonText>
      </NewAccountContainer>
    </Container>
  );
};

export default Login;
