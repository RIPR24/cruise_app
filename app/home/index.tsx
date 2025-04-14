import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import { useRouter } from "expo-router";
import homess from "../styles/home";
import Nav from "./Nav";

const index = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={homess.selCon}>
        <Nav />
        <ScrollView></ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default index;
