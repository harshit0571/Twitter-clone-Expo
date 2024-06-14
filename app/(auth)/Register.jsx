import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../../firebaseConfig";
import { router } from "expo-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (data) => {
          router.push("/Login");
        }
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-4xl font-extrabold text-indigo-700 mb-6">
        Register
      </Text>

      {error && <Text className="text-red-500 text-sm mb-4">{error}</Text>}


      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        className="w-full bg-white p-4 rounded-lg shadow-lg mb-5 border border-gray-300"
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        className="w-full bg-white p-4 rounded-lg shadow-lg mb-6 border border-gray-300"
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
      />

      <TouchableOpacity
        className="w-full bg-indigo-600 p-4 rounded-lg shadow-lg"
        onPress={handleRegister}
      >
        <Text className="text-center text-white text-xl font-semibold">
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
