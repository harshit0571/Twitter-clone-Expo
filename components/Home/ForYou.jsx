import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  FlatList,
  RefreshControl,
} from "react-native";
import { useTweetContext } from "../../context/TweetProvider";
import TweetCard from "./TweetCard";

const ForYou = () => {
  const { tweets, setTweets, getTweets } = useTweetContext();
  const [tweetsArray, setTweetsArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  console.log(tweets);
  const handleRefresh = async () => {
    setRefreshing(true);
    await getTweets()
    setRefreshing(false);
  };
  useEffect(() => {
    setTweetsArray(tweets);
  }, [tweets]);
  console.log(tweetsArray, "dsdsd");
  return (
    <View className="bg-slate-800 flex-1 flex-col gap-0 ">
      {tweetsArray.length <= 0 ? (
        <View className="flex-1 flex justify-center items-center">
          <Text className="text-white text-xl font-bold">Loading.....</Text>
        </View>
      ) : (
        <FlatList
          data={tweetsArray}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TweetCard tweet={item} />}
        />
      )}
    </View>
  );
};

export default ForYou;
