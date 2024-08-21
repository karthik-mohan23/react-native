import { View } from "react-native";
import Greet from "../components/Greet";
import Description from "../components/Description";
import Social from "../components/Social";
import Hobby from "../components/Hobby";

function Index() {
  return (
    <View>
      <Greet />
      <Description />
      <Social />
      <Hobby />
    </View>
  );
}

export default Index;
