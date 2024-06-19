import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useAuthContext } from "../../../../context/AuthProvider";
import { doc, getDoc, collection, query, where, getDocs, orderBy } from "firebase/firestore";
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
      const userTweets = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTweets(userTweets);
    } catch (error) {
      console.error("Error fetching user tweets: ", error);
    } finally {
      setLoadingTweets(false);
    }
  };

  useEffect(() => {
    const uid = userId || user?.uid;
    if (uid) {
      fetchUserProfile(uid);
      fetchUserTweets(uid);
    }
  }, [userId, user]);

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
      <Text className="text-white text-xl">{profileData.name}</Text>
      <Text className="text-white text-sm">{profileData.email}</Text>
      {/* Add more profile fields as needed */}
      {loadingTweets ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        // <FlatList
        //   data={tweets}
        //   keyExtractor={(item) => item.id}
        //   renderItem={({ item }) => <TweetCard tweet={item} />}
        // />
        <></>
      )}
    </View>
  );
}
