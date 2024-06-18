import React from "react";
import { Text, Image, View, SafeAreaView } from "react-native";
import { Pressable } from "react-native";
import { styled } from "nativewind";
import { Navigator, useNavigation } from "expo-router";

const CustomHeader = ({ title }) => {
  const StyledView = styled(SafeAreaView);
  const StyledText = styled(Text);
  const StyledPressable = styled(Pressable);
  const StyledImageContainer = styled(View);
  const navigation = useNavigation();
  return (
    <StyledView className="bg-black flex-row justify-between items-baseline py-8 px-4">
      <StyledPressable
        className="bg-red-500 p-4 rounded-full py-3"
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <StyledText className="text-white">H</StyledText>
      </StyledPressable>

      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlTNRaX-J4l3Uj-RbSU5vvsZtpioufqc9yw&s",
        }}
        className="h-10 w-10"
      />

      <StyledPressable className="bg-red-500 p-4 rounded-full py-3">
        <StyledText className="text-white">H</StyledText>
      </StyledPressable>
    </StyledView>
  );
};

export default CustomHeader;
