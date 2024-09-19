import { View, Text, FlatList } from "react-native";
const ArrayOfObjects = () => {
  const locations = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Dubai",
    },
    {
      id: 3,
      name: "Kochi",
    },
  ];

  return (
    <View>
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <Text>{item.item.name}</Text>}
      />
    </View>
  );
};
export default ArrayOfObjects;
