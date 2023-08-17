import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDj2xPUqVTF9p-vvXxIjXGWSPflZQFQIUo",
  authDomain: "g-signin-350305.firebaseapp.com",
  projectId: "g-signin-350305",
  storageBucket: "g-signin-350305.appspot.com",
  messagingSenderId: "181939899965",
  appId: "1:181939899965:web:6d53a39f0142caaeda2454",
  measurementId: "G-CWZSSF3FZV",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
