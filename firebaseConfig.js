import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWPsXwEZIXvTXHSEuB_hTSdz0pRMHtFKo",
  authDomain: "expo-c5cd8.firebaseapp.com",
  projectId: "expo-c5cd8",
  storageBucket: "expo-c5cd8.appspot.com",
  messagingSenderId: "248882803717",
  appId: "1:248882803717:web:836d09e2ff9b329b4a186c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
