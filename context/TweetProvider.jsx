import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useAuthContext } from "./AuthProvider";
import { generateRandomId } from "../constants/utils";

const TweetContext = createContext();
export const useTweetContext = () => {
  return useContext(TweetContext);
};

const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      const tweetArray = [];
      const querySnapshot = await getDocs(collection(db, "tweets"));
      querySnapshot.forEach((doc) => {
        tweetArray.push({ id: doc.id, ...doc.data() });
      });
      setTweets(tweetArray);
    };

    getTweets();
  }, []);

  const { user } = useAuthContext();
  const handleTweet = async (task, setTask, setIsVisible) => {
    console.log("Tweet button pressehd");
    if (user) {
      const tid = generateRandomId();
      const tweetRef = doc(db, "tweets", tid);
      await setDoc(tweetRef, {
        tid: tid,
        tweet: task,
        uid: user.uid,
        date: new Date().toISOString(),
      });
      setTask("");
      setIsVisible(false);
    } else {
      console.log("user not logged in");
    }
  };

  return (
    <TweetContext.Provider value={{ tweets, setTweets, handleTweet }}>
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
