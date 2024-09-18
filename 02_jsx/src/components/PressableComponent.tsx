import { View, Text, Pressable } from "react-native";
const PressableComponent = () => {
  return (
    <View>
      <Text>PressableComponent</Text>

      {/*
         1. onPress: Function that is called when the component is pressed. Required.
         2. onPressIn: Function that is called when the press gesture starts.
         3. onPressOut: Function that is called when the press gesture ends (or is cancelled).
         4. onLongPress: Function that is called when a long press is detected.
     */}

      <Pressable onPress={() => console.log("pressed")}>
        <Text style={{ color: "teal" }}>Press me</Text>
      </Pressable>
      <Pressable onPressIn={() => console.log("When pressed")}>
        <Text style={{ color: "orange" }}>Press me</Text>
      </Pressable>
      <Pressable onPressOut={() => console.log("After press")}>
        <Text style={{ color: "red" }}>Press out</Text>
      </Pressable>
      <Pressable onLongPress={() => console.log("long press")}>
        <Text style={{ color: "crimson" }}>On long Press</Text>
      </Pressable>
    </View>
  );
};
export default PressableComponent;
