import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddTask = ({ isVisible, setIsVisible }) => {
  const [task, setTask] = useState("");

  const handleTweet = () => {
    console.log("Tweet button pressed");
    // Handle tweet action here
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
        <ScrollView className="z-50 bg-black w-screen h-[50%] py-5 absolute bottom-0 p-5 rounded-t-3xl shadow-lg">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-white">Add Tweet</Text>
            <TouchableOpacity onPress={handleClose}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Enter your task..."
            placeholderTextColor="gray"
            value={task}
            onChangeText={setTask}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
            className="border border-blue-500 rounded-lg w-full p-2 mb-4 text-white h-32"
          />
          <TouchableOpacity
            className="flex-row items-center bg-blue-500 p-3 justify-center rounded-full"
            onPress={handleTweet}
          >
            <Ionicons name="logo-twitter" size={24} color="white" />
            <Text className="text-white text-lg ml-2">Tweet</Text>
          </TouchableOpacity>
        </ScrollView>
    </Modal>
  );
};

export default AddTask;
