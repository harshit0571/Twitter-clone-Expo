import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthProvider';
import { Link } from 'expo-router';

const Following = () => {
  const { user } = useAuthContext();
  console.log(user);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <View className="bg-gray-800 flex-1">
     <Link href="/AddTweet">Present modal</Link>
    </View>
  )
}

export default Following