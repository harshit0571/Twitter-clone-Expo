import React, { useEffect } from "react";
import { Slot } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import * as NavigationBar from 'expo-navigation-bar';

NativeWindStyleSheet.setOutput({
  default: "native",
});
const _layout = () => {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("black");
  }, []);

  return <Slot/>;
};

export default _layout;
