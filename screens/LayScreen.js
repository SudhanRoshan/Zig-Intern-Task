import { View, Text, Image } from "react-native";
import React from "react";

export default function LayScreen({ route }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{
          uri: route.params.image,
        }}
        style={{ width: 200, height: 200 }}
      ></Image>
      <Text style={{ fontSize: 20 }}>{route.params.name}!!!</Text>
    </View>
  );
}
