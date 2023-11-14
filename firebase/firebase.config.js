import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdNN_IY-PIgQ8NhhmWUKXfjoXltpcJ_vI",
  authDomain: "dragon-news-final-git.firebaseapp.com",
  projectId: "dragon-news-final-git",
  storageBucket: "dragon-news-final-git.appspot.com",
  messagingSenderId: "794575988691",
  appId: "1:794575988691:web:50eb81af04ce822e85f126"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)