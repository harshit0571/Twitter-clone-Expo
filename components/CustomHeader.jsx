import React from "react";
import { Text, Image, View, SafeAreaView, Platform } from "react-native";
import { Pressable } from "react-native";
import { styled } from "nativewind";
import { useNavigation } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomHeader = ({ title }) => {
  const StyledView = styled(SafeAreaView);
  const StyledText = styled(Text);
  const StyledPressable = styled(Pressable);
  const StyledImageContainer = styled(View);
  const navigation = useNavigation();
  return (
    <StyledView className={"bg-black flex-row justify-between items-center px-4 "+(Platform.OS==="android" ? "pt-9 pb-2":"py-4")}>
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

      <StyledText className="text-white">
        <Icon name="gear" size={30} color="#B4B4B4" />
      </StyledText>
    </StyledView>
  );
};

export default CustomHeader;
