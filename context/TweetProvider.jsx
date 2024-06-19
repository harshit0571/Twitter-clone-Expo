import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useAuthContext } from "./AuthProvider";
import { generateRandomId } from "../constants/utils";

const TweetContext = createContext();
export const useTweetContext = () => {
  return useContext(TweetContext);
};

const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const getTweets = async () => {
    const q = query(collection(db, "tweets"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    const getUserById = async (uid) => {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        return userDoc.data().name; // Assuming username is stored in 'username' field
      } else {
        return null;
      }
    };

    // Fetch tweets and user information

    const tweetPromises = querySnapshot.docs.map(async (doc) => {
      const userData = await getUserById(doc.data().uid);
      return { id: doc.id, ...doc.data(), username: userData };
    });
    const tweetArray = await Promise.all(tweetPromises);
    setTweets(tweetArray);
    console.log("called");
    // console.log(tweets);
  };
  useEffect(() => {
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
    <TweetContext.Provider
      value={{ tweets, setTweets, handleTweet, getTweets }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
