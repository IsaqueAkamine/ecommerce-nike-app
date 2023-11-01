import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { selectNumberOfItems } from "../store/cartSlice";

import Products from "../screens/Products";
import { AuthSlice } from "../store/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StorageKey from "../enums/StorageKeys";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(AuthSlice.actions.logout());
    await AsyncStorage.removeItem(StorageKey.USER_KEY);
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View
        style={{
          backgroundColor: "#ebf0ff",
          height: 1,
          marginHorizontal: 10,
        }}
      />
      <DrawerItem
        label="Logout"
        icon={() => <MaterialIcons name="logout" size={22} color="gray" />}
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
}

export const HomeDrawer = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  const rightIcon = (navigation) => (
    <Pressable
      onPress={() => navigation.navigate("Cart")}
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        right: 10,
      }}
    >
      <FontAwesome5 name="shopping-cart" size={18} color="gray" />
      <Text style={{ marginLeft: 5, fontWeight: "500" }}>{numberOfItems}</Text>
    </Pressable>
  );

  return (
    <Drawer.Navigator
      initialRouteName="Products"
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="Products"
        component={Products}
        options={({ navigation }) => ({
          headerRight: () => rightIcon(navigation),
          drawerIcon: ({ size, color }) => (
            <FontAwesome5 name="shopping-cart" size={18} color={color} />
          ),
        })}
      />
      {/* <Drawer.Screen
        name="Details"
        component={Details}
        options={{ presentation: "modal" }}
      />
      <Drawer.Screen name="Cart" component={Cart} /> */}
    </Drawer.Navigator>
  );
};
