import { View, Text, FlatList, ScrollView, Image } from "react-native";
import { products } from "../utils/constants";

type ProductsType = {
  image: string;
  name: string;
  rating: number;
  price: number;
};

const Challenge = () => {
  return (
    <ScrollView>
      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        renderItem={({ item }: { item: ProductsType }) => {
          return (
            <View>
              <Image
                source={{ uri: item.image }}
                style={{ width: 200, height: 200 }}
              />
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
              <Text>{item.rating}</Text>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};
export default Challenge;
