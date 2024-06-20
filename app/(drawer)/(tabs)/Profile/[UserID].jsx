import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import TweetCard from "../../../../components/Home/TweetCard";
import { useAuthContext } from "../../../../context/AuthProvider";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
// Adjust the import path as needed

export default function Profile() {
  const { userId } = useLocalSearchParams();
  const { user } = useAuthContext();
  const [profileData, setProfileData] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingTweets, setLoadingTweets] = useState(true);

  const fetchUserProfile = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        setProfileData(userDoc.data());
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error fetching user profile: ", error);
    } finally {
      setLoadingProfile(false);
    }
  };

  const fetchUserTweets = async (uid) => {
    try {
      const q = query(
        collection(db, "tweets"),
        where("uid", "==", uid),
        orderBy("date", "desc")
      );
      const querySnapshot = await getDocs(q);
      const tweetArray = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        tweetArray.push(doc.data());
      });
      setTweets(tweetArray);
    } catch (error) {
      console.error("Error fetching user tweets: ", error);
    } finally {
      setLoadingTweets(false);
    }
  };
  console.log(tweets, "yo");
  useEffect(() => {
    const uid = userId || user?.uid;
    if (uid) {
      fetchUserProfile(uid);
      fetchUserTweets(uid);
    }
  }, [userId, user]);
  const renderHeader = () => (
    <View className="flex flex-col justify-center items-center border-b-2 border-blue-500 pb-4">
      <Image
        source={{
          uri: "https://www.citypng.com/public/uploads/preview/profile-user-round-white-icon-symbol-png-701751695033499brrbuebohc.png",
        }}
        style={{ width: 200, height: 200 }}
        className="rounded-full"
      />
      <Text className="text-white text-xl">{profileData.name}</Text>
      <Text className="text-white text-sm">{profileData.email}</Text>
      <Text className="text-white text-sm">{profileData.dob}</Text>
    </View>
  );

  if (loadingProfile) {
    return (
      <View className="bg-black flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (!profileData) {
    return (
      <View className="bg-black flex-1 justify-center items-center">
        <Text className="text-white">Profile not found</Text>
      </View>
    );
  }

  return (
    <View className="bg-black flex-1 p-4">
      {loadingTweets ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={tweets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TweetCard tweet={item} username={profileData.name} />
          )}
          ListHeaderComponent={renderHeader}
          
        />
      )}
    </View>
  );
}
