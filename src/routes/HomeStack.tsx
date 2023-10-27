import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { selectNumberOfItems } from "../store/cartSlice";

import Products from "../screens/Products";
import Details from "../screens/Details";
import Cart from "../screens/Cart";
import { AuthSlice } from "../store/AuthSlice";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  const leftIcon = () => {
    const dispatch = useDispatch();
    return (
      <Pressable onPress={() => dispatch(AuthSlice.actions.logout())}>
        <MaterialIcons name="logout" size={22} color="gray" />
      </Pressable>
    );
  };

  const rightIcon = (navigation) => (
    <Pressable
      onPress={() => navigation.navigate("Cart")}
      style={{
        flexDirection: "row",
      }}
    >
      <FontAwesome5 name="shopping-cart" size={18} color="gray" />
      <Text style={{ marginLeft: 5, fontWeight: "500" }}>{numberOfItems}</Text>
    </Pressable>
  );

  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ navigation }) => ({
          headerLeft: leftIcon,
          headerRight: () => rightIcon(navigation),
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
