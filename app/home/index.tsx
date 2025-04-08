import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { CruiseContext } from "../Context/AppContext";
import { Link, useRouter } from "expo-router";
import mov from "../../assets/images/movie.jpg";
import gym from "../../assets/images/gyms.jpg";
import lo from "../../assets/images/logout.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import homess from "../styles/home";

const index = () => {
  const { user, setUser } = useContext(CruiseContext);
  const router = useRouter();

  const logout = () => {
    if (setUser) setUser(null);
    AsyncStorage.removeItem("tok");
    router.push("/");
  };

  useEffect(() => {
    if (!user) {
      //logout();
    }
  });

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={homess.selCon}>
        <View>
          <Text>{user?.name || "yolo"}</Text>
          <Pressable onPress={logout}>
            <Image source={lo} style={{ height: 30, width: 30 }} />
          </Pressable>
        </View>
        <Link href={"/home/movie"} asChild>
          <Pressable style={{ width: "80%" }}>
            <ImageBackground
              style={homess.imgback}
              imageStyle={{ borderRadius: 10 }}
              source={mov}
              resizeMode="cover"
            >
              <Text style={homess.fnt}>Movies</Text>
            </ImageBackground>
          </Pressable>
        </Link>
        <Link href={"/home/booking"} style={{ width: "80%" }} asChild>
          <Pressable style={{ width: "80%" }}>
            <ImageBackground
              imageStyle={{ borderRadius: 10 }}
              style={homess.imgback}
              source={gym}
              resizeMode="cover"
            >
              <Text style={homess.fnt}>Bookings</Text>
            </ImageBackground>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
