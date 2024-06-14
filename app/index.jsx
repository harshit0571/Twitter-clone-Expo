import React from "react";
import { View} from "react-native";
import { Redirect } from "expo-router";

const Index = () => {
  if (1 <2) {
    return <Redirect href="/Register" />;
  }
  return (
    <View></View>

  );
};

export default Index;
