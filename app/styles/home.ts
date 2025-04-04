import { StyleSheet, Dimensions } from "react-native";

export const homess = StyleSheet.create({
  selCon: {
    width: Dimensions.get("window").width,
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    gap: 20,
  },
  imgback: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  fnt: { fontSize: 30, fontWeight: 500, color: "white" },
  slt: {
    height: 80,
    borderWidth: 2,
    borderColor: "#848587",
    backgroundColor: "#c4c4c4",
    borderRadius: 5,
  },
  sel: {
    height: 80,
    borderWidth: 2,
    borderColor: "#1d68e0",
    backgroundColor: "#88b1f2",
    borderRadius: 5,
  },
});

export default homess;
