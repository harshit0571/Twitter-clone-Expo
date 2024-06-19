import React, { useEffect } from "react";
import { Slot } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import * as NavigationBar from "expo-navigation-bar";
import { View, StyleSheet } from "react-native";
import AuthProvider from "../context/AuthProvider";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Layout = () => {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("black");
  }, []);

  return (
    <AuthProvider>
      <View className="bg-slate-800 flex-1">
        <Slot />
      </View>
    </AuthProvider>
  );
};

export default Layout;
