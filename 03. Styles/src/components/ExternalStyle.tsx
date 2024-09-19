import { View, Text } from "react-native";
import externalStyle from "../utils/style";
const ExternalStyle = () => {
  return (
    <View>
      <Text style={externalStyle.textStyle}>ExternalStyle</Text>
    </View>
  );
};
export default ExternalStyle;
