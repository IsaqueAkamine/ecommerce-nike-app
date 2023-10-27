import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeDrawer } from "./HomeDrawer";
import Details from "../screens/Details";
import Cart from "../screens/Cart";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen
        name="Drawer"
        component={HomeDrawer}
        options={{
          headerShown: false,
        }}
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
