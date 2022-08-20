// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD4VkA0t3uq0felroP5ntyaU4XplEPKNkI",
  authDomain: "fir-8a77a.firebaseapp.com",
  projectId: "fir-8a77a",
  storageBucket: "fir-8a77a.appspot.com",
  messagingSenderId: "438214771716",
  appId: "1:438214771716:web:81e9f096654b26099ca151",
  measurementId: "G-LQ105S7NHC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
export {auth};