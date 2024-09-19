import { View, Text, FlatList } from "react-native";
const ListData = () => {
  const fruits = ["apple", "banana", "orange"];

  return (
    <View>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item}
        renderItem={(el) => <Text>{el.item}</Text>}
      />
    </View>
  );
};
export default ListData;
