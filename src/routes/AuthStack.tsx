import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
