import { View, Text, Pressable } from "react-native";
import React from "react";

const TweetCard = ({ tweet }) => {
  return (
    <View
      key={tweet.id}
      className="bg-black border-y-2 border-gray-600 rounded-lg p-4 flex-col gap-2"
    >
      <View className="flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-2">
          <Pressable className="bg-orange-400 px-2 py-1 rounded-full">
            <Text className="text-white">{tweet.username[0]}</Text>
          </Pressable>
          <Text className="text-white text-lg">{tweet.username}</Text>
        </View>

        <Text className="text-gray-300 text-sm">
          {tweet.date.split("T")[0]}
        </Text>
      </View>

      <Text className="text-white text-lg mb-2 px-1">{tweet.tweet}</Text>
    </View>
  );
};

export default TweetCard;
