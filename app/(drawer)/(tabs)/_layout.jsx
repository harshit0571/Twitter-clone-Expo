import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

const _layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 60,
            backgroundColor: "black",
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View>
                <Text
                  className={
                    (focused && "text-white font-semibold") + " text-white"
                  }
                >
                  Home{" "}
                </Text>
              </View>
            ),
            headerShown: false,
            headerStyle: {
              backgroundColor: "#000000",
            },
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View>
                <Text
                  className={
                    (focused && "text-white font-semibold") + " text-white"
                  }
                >
                  Profile
                </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
};

export default _layout;
