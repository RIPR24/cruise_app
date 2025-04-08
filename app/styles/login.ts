import { StyleSheet, Dimensions } from "react-native";

const logss = StyleSheet.create({
  inp: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#3474eb",
    width: (Dimensions.get("window").width * 8) / 10,
    height: 40,
    fontSize: 18,
  },
  colCon: {
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
    width: "100%",
  },
  imgm: {
    width: 75,
    height: 75,
  },
});

export default logss;
