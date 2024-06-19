import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Slot } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import AddTask from "../../../../components/Home/AddTask";
const _layout = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Slot />
      <Pressable
        className="bg-blue-500 p-4 hover:bg-blue-100 w-[50px] h-[50px] absolute bottom-8 right-5 rounded-full"
        onPress={() => {
          setIsVisible(!isVisible);
        }}
      >
        <Icon name="plus" color="#fff" size={20} />
      </Pressable>
      <AddTask isVisible={isVisible} setIsVisible={setIsVisible} />
    </>
  );
};

export default _layout;
