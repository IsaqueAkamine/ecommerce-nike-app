import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Products from "../screens/Products";
import Details from "../screens/Details";
import ShoppingCart from "../screens/ShoppingCart";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Cart")}
              style={{
                flexDirection: "row",
              }}
            >
              <FontAwesome5 name="shopping-cart" size={18} color="gray" />
              <Text style={{ marginLeft: 5, fontWeight: "500" }}>1</Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen name="Cart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};
