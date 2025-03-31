import { Text, View } from "react-native";
import Login from "./login";
import AppContext from "./Context/AppContext";

export default function Index() {
  return (
    <AppContext>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Login />
      </View>
    </AppContext>
  );
}
