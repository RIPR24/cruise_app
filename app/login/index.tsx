import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { logss } from "../styles/login";

const Login = () => {
  return (
    <View>
      <View style={logss.colCon}>
        <Text>Login</Text>
        <TextInput style={logss.inp} placeholder="Username" />
        <TextInput
          style={logss.inp}
          secureTextEntry={true}
          placeholder="Password"
        />
        <Button title="Login" />
      </View>
    </View>
  );
};

export default Login;
