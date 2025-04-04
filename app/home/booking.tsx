import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { postReq, site } from "../utils/request";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePicker from "react-native-date-picker";
import { homess } from "../styles/home";

export type rs = {
  _id?: string;
  name: string;
  slots: slot[];
};

export type slot = {
  from: string;
  to: string;
  price: number;
  max: number;
  sid: string;
};

type booked = {
  _id: string;
  no: number;
};

const booking = () => {
  const [rs, setRs] = useState<rs | null>(null);
  const [sid, setSid] = useState<string>("");
  const [book, setBook] = useState<booked[]>([]);
  const [date, setDate] = useState(new Date());
  const [rsl, setRsl] = useState<rs[]>([]);
  const [dp, setDp] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(true);

  const getData = async () => {
    const res = await fetch(site + "rs/");
    const data = await res.json();
    setRsl(data.rcs);
    setRs(data.rcs[0]);
    setLoad(false);
  };

  const getBooked = async (rsid: string = rs?._id || "") => {
    if (date && rsid) {
      const bok = await postReq("rs/booked", { rsid, date });
      setBook(bok.rb);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      {load ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <Text>{rs && rs.name}</Text>
          <View>
            <Text>Date :</Text>
            <DatePicker
              modal
              open={dp}
              date={date}
              onConfirm={(d) => {
                setDate(d);
                setDp(false);
                getBooked();
              }}
              onCancel={() => setDp(false)}
            ></DatePicker>
          </View>
          <ScrollView style={{ width: "90%", flex: 2 }}>
            {rs &&
              rs.slots.map((el) => (
                <Pressable
                  key={el.sid}
                  onPress={() => {
                    setSid(el.sid);
                  }}
                >
                  <View style={el.sid === sid ? homess.sel : homess.slt}>
                    <Text>{el.from + "-" + el.to}</Text>
                    <Text>{"" + el.price}</Text>
                    <Text>
                      {`Slot left : ${
                        el.max - (book.find((e) => e._id === el.sid)?.no || 0)
                      }`}
                    </Text>
                  </View>
                </Pressable>
              ))}
          </ScrollView>
          <View>{rsl && rsl.map((el, i) => <View></View>)}</View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default booking;
