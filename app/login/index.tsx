import { View, Text, TextInput, Button } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View>
      <View style={{ flexDirection: "column", alignItems: "center", gap: 10 }}>
        <Text>Login</Text>
        <TextInput placeholder="Username" />
        <TextInput secureTextEntry={true} placeholder="Password" />
        <Button title="Login" />
      </View>
    </View>
  );
};

export default Login;
