import { View, Text, Image } from "react-native";
import React from "react";

const CustomHeader = ({ title }) => {
  return (
    <View className="bg-black flex justify-center">
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg",
        }}
        style={{width:30, height:30}}
        className="h-[100px] w-[100px]"
      />

    </View>
  );
};

export default CustomHeader;
