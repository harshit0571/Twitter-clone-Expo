import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Text className={focused && "text-indigo-700 font-semibold"}>Home </Text>
            </View>
          ),
          headerShown: true,
          headerTitle:({})=>(<></>)
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Text className={focused && "text-indigo-700 font-semibold"}>Profile</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
