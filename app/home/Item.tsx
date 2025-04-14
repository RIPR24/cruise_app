import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { cart, item } from "./order";

type props = {
  el: item;
  setCart: React.Dispatch<React.SetStateAction<cart[]>>;
};

const Item = ({ el, setCart }: props) => {
  const addCart = () => {
    setCart((pre) => {
      if (pre.some((e) => e._id === el._id)) return pre;
      return [...pre, { _id: el._id, name: el.name, qnt: 1, price: el.price }];
    });
  };

  return (
    <View style={styles.con}>
      <Image style={styles.img} source={{ uri: el.img }} />
      <View style={{ flexGrow: 1, flexShrink: 1 }}>
        <Text style={{ fontSize: 20 }}>{el.name}</Text>
        <Text>{el.description}</Text>
      </View>
      <Button title="add To Cart" onPress={addCart}></Button>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  con: {
    height: 100,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
  },
});
