import React from "react";
import { Slot } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import { View } from "react-native";

NativeWindStyleSheet.setOutput({
  default: "native",
});
const _layout = () => {
  return <Slot/>;
};

export default _layout;
