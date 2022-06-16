import { View } from "react-native";
import React, { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";

export default function Home({ navigation }) {
  const [menuItemData, setMenuItemData] = useState([]);
  const fetchData = async () => {
    const resp = await fetch(
      "https://run.mocky.io/v3/45752826-6a0c-4cba-921c-a34f03f9cd6c"
    );
    const data = await resp.json();
    const menuItemData = data.list;
    setMenuItemData(menuItemData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <MenuItem menuItemData={menuItemData} navigation={navigation}></MenuItem>
    </View>
  );
}
