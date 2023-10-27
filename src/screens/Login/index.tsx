import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

import Input from "../../components/Input";
import SocialLoginButton from "../../components/SocialLoginButton";

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
import { ActivityIndicator, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { AuthSlice } from "../../store/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StorageKey from "../../enums/StorageKeys";

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const logo = require("../../assets/img/nikelogo.png");
  const navigation = useNavigation();

  const handleNavigateSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleLogin = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // // Signed in
        const credential = userCredential.user;
        const user = {
          accessToken: credential.accessToken,
          email: credential.email,
        };
        // // ...
        AsyncStorage.setItem(StorageKey.USER_KEY, JSON.stringify(user));
        dispatch(AuthSlice.actions.loginUser(user));
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function handleForgotPassword() {
    setIsLoading(true);
    let error = "";

    if (email.trim().length < 3) error = "Email inválido";

    if (error.length > 0) {
      setIsLoading(false);
      return Alert.alert("Error", error);
    }

    sendPasswordResetEmail(auth, email)
      .then(() => Alert.alert("Esqueceu a senha", "Um email foi enviado"))
      .catch((error) => {
        Alert.alert("Error", error.message);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <Container>
      <WelcomeContainer>
        <NikeLogo source={logo} resizeMode="contain" />
        <WelcomeText>Bem vindo a Nike</WelcomeText>
        <LoginText>Faça o login para continuar</LoginText>
      </WelcomeContainer>

      <InputsContainer>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChangeText={setPassword}
        />
      </InputsContainer>

      <LoginButton onPress={handleLogin}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <LoginButtonText>Entrar</LoginButtonText>
        )}
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

      <ForgotText onPress={handleForgotPassword}>
        Esqueceu sua senha?
      </ForgotText>

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
