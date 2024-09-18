import { ScrollView } from "react-native";
import TextComponent from "../components/TextComponent";
import ViewComponent from "../components/ViewComponent";
import ButtonComponent from "../components/ButtonComponent";
import PressableComponent from "../components/PressableComponent";
import ImageComponent from "../components/ImageComponent";
import ChallengeComponent from "../components/ChallengeComponent";

function Index() {
  return (
    <ScrollView>
      <TextComponent />
      <ViewComponent />
      <ButtonComponent />
      <PressableComponent />
      <ImageComponent />
      <ChallengeComponent />
    </ScrollView>
  );
}

export default Index;
