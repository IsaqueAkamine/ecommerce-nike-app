import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import products from "../../data/products";

import { Container, Image, ImageButton, Title } from "./styles";

const Product = ({ uri }) => {
  const navigation = useNavigation();

  const handleNavigateToDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <ImageButton onPress={handleNavigateToDetails}>
      <Image source={{ uri }} />
    </ImageButton>
  );
};

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
