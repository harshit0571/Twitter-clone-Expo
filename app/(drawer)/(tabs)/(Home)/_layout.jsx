import { View, Text, Pressable } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome'
const _layout = () => {
  return (
    <>
      <Slot />
    <Pressable className="bg-blue-500 p-4 hover:bg-blue-100 w-[50px] h-[50px] absolute bottom-8 right-5 rounded-full">
        <Icon name="plus" color="#fff" size={20}/>
    </Pressable>
    </>
  );
};

export default _layout;
