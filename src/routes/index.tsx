import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./HomeStack";

export const Routes = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};
