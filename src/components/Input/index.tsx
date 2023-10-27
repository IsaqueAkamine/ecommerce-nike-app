import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Container, InputStyled } from "./styles";

type TInputProps = TextInputProps & {
  type: "email" | "password" | "user";
};

const Input: React.FC<TInputProps> = ({ type, ...rest }) => {
  const isPassword = type === "password";

  const icon = () => {
    switch (type) {
      case "email":
        return "mail";
      case "password":
        return "lock";
      default:
        return "user";
    }
  };

  return (
    <Container>
      <Feather name={icon()} size={18} color="#9098B1" />
      <InputStyled {...rest} secureTextEntry={isPassword} />
    </Container>
  );
};

export default Input;
