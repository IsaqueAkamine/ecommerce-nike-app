import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from "../screens/Products";
import Details from "../screens/Details";
import ShoppingCart from "../screens/ShoppingCart";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Produtcs" component={Products} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};
