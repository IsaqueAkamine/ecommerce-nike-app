import React from "react";
import { FlatList } from "react-native";

import products from "../../data/products";

import { Container, Image, ImageContainer, Title } from "./styles";

const Product = ({ uri }) => (
  <ImageContainer>
    <Image source={{ uri }} />
  </ImageContainer>
);

const Products: React.FC = () => {
  return (
    <Container>
      <FlatList
        data={products}
        renderItem={({ item, index }) => <Product uri={item.image} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Products;
