import { View, Text, StyleSheet } from "react-native";

const InternalStyle = () => {
  return (
    <View>
      <Text style={styles.textStyle}>InternalStyle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "crimson",
    fontSize: 30,
    backgroundColor: "yellow",
    padding: 20,
  },
});

export default InternalStyle;
