import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

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
            backgroundColor: "black",
          },
        }}
      >
        <Tabs.Screen
          name="(Home)"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View>
                <Text
                  className={
                    (focused && "text-white font-semibold") + " text-white"
                  }
                >
                  <Icon
                    name="home"
                    size={30}
                    color={focused ? "#307AFF" : "#B4B4B4"}
                  />
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
          name="Profile/[UserID]"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View>
                <Text
                  className={
                    (focused && "text-white font-semibold") + " text-white"
                  }
                >
                  <Icon
                    name="user"
                    size={30}
                    color={focused ? "#307AFF" : "#B4B4B4"}
                    className="text-indigo-500"
                  />
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
  );
};

export default _layout;
