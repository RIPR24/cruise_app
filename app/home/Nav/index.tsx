import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { CruiseContext } from "@/app/Context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import lo from "../../../assets/images/logout.png";
import mu from "../../../assets/images/icons/menu.png";
import SideBar from "./SideBar";

const Nav = () => {
  const { user, setUser } = useContext(CruiseContext);
  const router = useRouter();
  const [sbar, setSbar] = useState(false);

  const logout = () => {
    if (setUser) setUser(null);
    AsyncStorage.removeItem("tok");
    router.push("/");
  };
  return (
    <View style={styles.nav}>
      <Pressable
        onPress={() => {
          setSbar((p) => !p);
        }}
      >
        <Image source={mu} style={{ height: 30, width: 30 }} />
      </Pressable>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Text style={{ color: "#fff", fontWeight: 400, fontSize: 20 }}>
          {user?.name}
        </Text>
        <Pressable onPress={logout}>
          <Image source={lo} style={{ height: 30, width: 30 }} />
        </Pressable>
      </View>
      <SideBar sbar={sbar} setSbar={setSbar} />
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  nav: {
    height: 50,
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#00000060",
    backdropFilter: "blur(5)",
    zIndex: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomColor: "#444444",
    borderBottomWidth: 1,
  },
});
