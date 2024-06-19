import React, { useEffect } from "react";
import { View } from "react-native";
import { Redirect } from "expo-router";
import { useAuthContext } from "../context/AuthProvider";

const Index = () => {
  const { user } = useAuthContext();
  console.log(user);
  useEffect(() => {
    console.log(user);
  }, [user]);
  if (user) {
    return <Redirect href="/Login" />;
  }
  return <Redirect href="/Home" />;
};

export default Index;
