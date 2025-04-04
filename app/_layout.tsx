import { Stack } from "expo-router";
import AppContext from "./Context/AppContext";

export default function RootLayout() {
  return (
    <AppContext>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </AppContext>
  );
}
