import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import CustomHeader from "../../components/CustomHeader";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#586776" />

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
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTitle: ({}) => <CustomHeader title={"Home"} />,
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
            headerTitle: ({}) => <CustomHeader title={"Home"} />,
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerShown: true,
          }}
        />
      </Tabs>
    </>
  );
};

export default _layout;
