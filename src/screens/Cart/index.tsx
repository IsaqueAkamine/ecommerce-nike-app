import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import CartListItem from "../../components/CartListItem";

import {
  CheckoutButton,
  CheckoutText,
  Container,
  FooterContainer,
  RowContainer,
  TextInfo,
  TextInfoBold,
  TotalsContainer,
} from "./styles";

const Cart: React.FC = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Container>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <TotalsContainer>
            <RowContainer>
              <TextInfo>Subtotal</TextInfo>
              <TextInfo>410,00 US$</TextInfo>
            </RowContainer>
            <RowContainer>
              <TextInfo>Delivery</TextInfo>
              <TextInfo>16,50 US$</TextInfo>
            </RowContainer>
            <RowContainer>
              <TextInfoBold>Total</TextInfoBold>
              <TextInfoBold>426,50 US$</TextInfoBold>
            </RowContainer>
          </TotalsContainer>
        )}
      />
      <FooterContainer>
        <CheckoutButton>
          <CheckoutText>Checkout</CheckoutText>
        </CheckoutButton>
      </FooterContainer>
    </Container>
  );
};

export default Cart;
