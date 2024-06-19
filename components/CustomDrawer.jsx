import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomDrawer = () => {
  return (
    <SafeAreaView className="flex-1 flex bg-black justify-around flex-col">
      <View className="p-4 flex flex-row items-center gap-5 border-b-2 border-indigo-500">
        <Pressable
          className="bg-red-500 p-4 max-w-[45px] rounded-full py-3"
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Text className="text-white text-center">H</Text>
        </Pressable>
        <Text className="text-white font-semibold text-lg">Harshit Chadha</Text>
      </View>
      <View className="flex flex-col p-7 gap-2 justify-center">
        <Link href={"Register"} className="text-gray-200 font-semibold text-2xl">
          <Text>Home</Text>
        </Link>
        <Link href={"Home"} className="text-gray-200 font-semibold text-2xl">
          <Text>Home</Text>
        </Link>
        <Link href={"Home"} className="text-gray-200 font-semibold text-2xl">
       
          <Text>Home</Text>
        </Link>
        <Link href={"Home"} className="text-gray-200 font-semibold text-2xl">
          
          <Text>Home</Text>
        </Link>
      </View>
      <View className="flex flex-col p-5 gap-2">
        <View className="gap-2 flex-row justify-start items-center">
          <Text>
            <Icon name="gear" size={30} color="#B4B4B4" />
          </Text>

          <Text className="text-gray-300 text-xl">Settings</Text>
        </View>

        <View className="gap-2 flex-row justify-start items-center">
          <Text>
            <Icon name="sign-out" size={30} color="#B4B4B4" />
          </Text>

          <Text className="text-gray-300 text-xl">Logout</Text>
        </View>
        <View className="gap-2 flex-row justify-start items-center">
          <Text>
            <Icon name="newspaper-o" size={30} color="#B4B4B4" />
          </Text>

          <Text className="text-gray-300 text-xl">About Us</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
