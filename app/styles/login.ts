import { StyleSheet, Dimensions } from "react-native";

export const logss = StyleSheet.create({
  inp: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#3474eb",
    width: (Dimensions.get("window").width * 8) / 10,
    height: 30,
    fontSize: 18,
  },
  colCon: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
});
