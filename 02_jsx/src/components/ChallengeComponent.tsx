import { View, Text, Image, Button } from "react-native";
const ChallengeComponent = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.GIwNfQ82YatR_th9eSdQFgAAAA?rs=1&pid=ImgDetMain",
        }}
        style={{ width: 200, height: 200, objectFit: "cover" }}
      />
      <Text>Karthik Mohan</Text>
      <Text>I love React native</Text>
      <Button title="Press Me" onPress={() => console.log("pressed")} />
    </View>
  );
};
export default ChallengeComponent;
