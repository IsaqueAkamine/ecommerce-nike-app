import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./HomeStack";
import { AuthStack } from "./AuthStack";

export const Routes = () => {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      <AuthStack />
    </NavigationContainer>
  );
};
