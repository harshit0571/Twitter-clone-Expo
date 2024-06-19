import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../../firebaseConfig";
import { Link, router } from "expo-router"; // Assuming this handles navigation
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        router.push("/Home"); 
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-6 bg-black">
      <Text className="text-4xl font-extrabold text-lightblue-500 mb-6 text-blue-400">
        Login
      </Text>

      {error && <Text className="text-red-500 text-sm mb-4">{error}</Text>}

      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-5 border border-gray-600"
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-6 border border-gray-600"
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
      />

      <TouchableOpacity
        className="w-full bg-blue-500 p-4 rounded-lg shadow-lg"
        onPress={handleLogin}
      >
        <Text className="text-center text-white text-xl font-semibold">
          Login
        </Text>
      </TouchableOpacity>
      <Link href={'/Register'} className="mt-3"><Text className="mt-3 text-blue-500">Don't have an account? Register</Text></Link>
    </View>
  );
};

export default Login;
