import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import crs from "../../../assets/images/cruise.png";
import crsw from "../../../assets/images/cruise-w.png";
import { Link } from "expo-router";

type props = {
  setSbar: React.Dispatch<React.SetStateAction<boolean>>;
  sbar: boolean;
};

const SideBar = ({ sbar, setSbar }: props) => {
  return (
    <View style={[styles.sb, { left: sbar ? 0 : -300 }]}>
      <Image
        style={{ height: 100, width: 100, marginVertical: 50 }}
        source={crsw}
      />
      <Pressable
        onPress={() => {
          setSbar(false);
        }}
      >
        <Link href={"/home/booking"} style={styles.lnk}>
          Booking
        </Link>
      </Pressable>
    </View>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  sb: {
    position: "absolute",
    alignItems: "center",
    width: 300,
    height: Dimensions.get("window").height - 50,
    top: 50,
    transitionDuration: "0.2s",
    backgroundColor: "#00000060",
    backdropFilter: "blur(5)",
  },
  lnk: {
    borderTopWidth: 2,
    borderTopColor: "#fff",
    width: 250,
    padding: 5,
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
