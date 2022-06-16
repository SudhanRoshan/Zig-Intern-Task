import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
export default function MenuItem({ menuItemData, navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {menuItemData.map((menu, index) => (
        <View>
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onPress={() =>
              navigation.navigate("LayScreen", {
                image: menu.ProductImageURL,
                name: menu.Farename,
              })
            }
          >
            <MenuItemImage image={menu.ProductImageURL} />
            <MenuItemInfo name={menu.Farename} />
            <MenuItemId id={menu.FareId} />
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
              paddingLeft: "30%",
              paddingBottom: 30,
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const MenuItemImage = (props) => (
  <Image
    source={{
      uri: props.image,
    }}
    style={{ width: "30%", height: 100 }}
  ></Image>
);

const MenuItemInfo = (props) => (
  <View style={{ paddingLeft: 5 }}>
    <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
    <Text style={{ color: "gray", fontSize: 15 }}>
      "Betcha can't eat just one".
    </Text>
  </View>
);

const MenuItemId = (props) => (
  <View>
    <Text
      style={{
        paddingLeft: 5,
        fontSize: 15,
        color: "gray",
        paddingRight: 5,
      }}
    >
      {props.id}
    </Text>
  </View>
);
