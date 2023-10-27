import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Container, InputStyled } from "./styles";

type TInputProps = TextInputProps & {
  type: "email" | "password";
};

const Input: React.FC<TInputProps> = ({ type, ...rest }) => {
  const isPassword = type === "password";
  return (
    <Container>
      <Feather name={isPassword ? "lock" : "mail"} size={18} color="#9098B1" />
      <InputStyled {...rest} secureTextEntry={isPassword} />
    </Container>
  );
};

export default Input;
