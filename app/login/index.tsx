import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  useColorScheme,
} from "react-native";
import React, { useContext, useState } from "react";
import { logss } from "../styles/login";
import crs from "../../assets/images/cruise.png";
import crsw from "../../assets/images/cruise-w.png";
import { useRouter } from "expo-router";
import { CruiseContext } from "../Context/AppContext";
import { postReq } from "../utils/request";

type info = {
  username: string;
  password: string;
};

const Login = () => {
  const isD = useColorScheme() === "dark";
  const router = useRouter();
  const [disable, setDisable] = useState(false);
  const { setUser } = useContext(CruiseContext);
  const [prob, setProb] = useState("");
  const [info, setInfo] = useState<info>({
    username: "",
    password: "",
  });

  const login = async () => {
    setDisable(false);
    const res = await postReq("voy/login", info);
    if (res) {
      if (res.status !== "success") {
        setProb(res.status);
        setDisable(true);
      } else {
        if (setUser) setUser(res.user);
        if (res.user?.room) {
          //router.push("voy");
          localStorage.setItem("tok", res.user.token || "");
        }
      }
    }
  };

  return (
    <View>
      <View style={logss.colCon}>
        <Image style={logss.imgm} source={isD ? crs : crsw} />
        <Text style={{ fontSize: 45, fontWeight: 500 }}>Login</Text>
        <TextInput
          style={logss.inp}
          placeholder="Username"
          onChangeText={(t) => {
            setInfo((p) => ({ ...p, username: t }));
          }}
          value={info.username}
        />
        <TextInput
          style={logss.inp}
          secureTextEntry={true}
          placeholder="Password"
          value={info.password}
          onChangeText={(t) => {
            setInfo((p) => ({ ...p, password: t }));
          }}
        />
        <Text style={{ color: "red" }}>{prob}</Text>
        <Button disabled={disable} title="Login" />
      </View>
    </View>
  );
};

export default Login;
