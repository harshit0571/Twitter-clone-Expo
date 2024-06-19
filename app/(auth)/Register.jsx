import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { auth, db } from "../../firebaseConfig";
import { Link, router } from "expo-router";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const adduser = async (uid) => {
    console.log(uid,"sd")
    const userDoc = doc(db, "users", uid);
    await setDoc(userDoc, { name: name, dob: dob, email: email, uid:uid});
  };
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(async(userCred) => {
        // You may want to save additional user information to your database here
        await adduser(userCred.user.uid)
        router.push("/Login");
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      keyboardShouldPersistTaps="handled"
    >
      <View className="flex-1 justify-center items-center bg-black p-6">
        <Text className="text-4xl font-extrabold text-blue-500 mb-6">
          Register
        </Text>

        {error && <Text className="text-red-500 text-sm mb-4">{error}</Text>}

        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-5 border border-gray-600"
          placeholder="Name"
          placeholderTextColor="gray"
        />

        <TextInput
          value={dob}
          onChangeText={(text) => setDob(text)}
          className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-5 border border-gray-600"
          placeholder="Date of Birth (YYYY-MM-DD)"
          placeholderTextColor="gray"
          keyboardType="numeric"
        />

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
          className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-5 border border-gray-600"
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
        />

        <TouchableOpacity
          className="w-full bg-blue-500 p-4 rounded-lg shadow-lg"
          onPress={handleRegister}
        >
          <Text className="text-center text-white text-xl font-semibold">
            Sign Up
          </Text>
        </TouchableOpacity>

        <Link href={"/Login"} className="mt-3">
          <Text className="mt-3 text-blue-500">
            Already have an account? Login
          </Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default Register;
