import { StatusBar } from "expo-status-bar";
import Products from "./src/screens/Products";
import Details from "./src/screens/Details";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <Products /> */}
      <Details />
    </>
  );
}
