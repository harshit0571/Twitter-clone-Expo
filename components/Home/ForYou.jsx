import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useTweetContext } from "../../context/TweetProvider";

const ForYou = () => {
  const { tweets, setTweets } = useTweetContext();

  return (
    <View className="bg-slate-800 flex-1">
      <ScrollView style={{ flex: 1 }}>
        {tweets.map((tweet) => (
          <View key={tweet.id} className="bg-gray-700 rounded-lg p-4 mb-4">
            <Text className="text-white text-lg mb-2">{tweet.tweet}</Text>
            <Text className="text-gray-300 text-sm">{tweet.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ForYou;
