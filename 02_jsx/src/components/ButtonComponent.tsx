import { View, Text, Button } from "react-native";
const ButtonComponent = () => {
  return (
    <View>
      <Text>ButtonComponent</Text>
      <Button title="Learn More" onPress={() => console.warn("pressed")} />
    </View>
  );
};
export default ButtonComponent;
