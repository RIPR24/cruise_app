import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { postReq } from "../utils/request";

export type cart = {
  _id: string;
  name: string;
  qnt: number;
  price: number;
};

export type item = {
  _id: string;
  name: string;
  img: string;
  description: string;
  tags: string[];
  price: number;
  food: boolean;
};

const order = (food: boolean) => {
  const [items, setItems] = useState<item[]>([]);
  const [fil, setFil] = useState<item[]>([]);
  const [cart, setCart] = useState<cart[]>([]);
  const [cartpop, setCartpop] = useState(false);
  const [myord, setMyord] = useState(false);

  const getData = async () => {
    const dat = await postReq("item/getsta", { food });
    setItems(dat.sta);
    setFil(dat.sta);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>order</Text>
    </View>
  );
};

export default order;
