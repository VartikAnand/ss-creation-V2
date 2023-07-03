import { initializeApp } from "firebase/app";

import { GoogleAuthProvider,getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBFRgS-1gA9Brsag9DEd6ktF_MrNLDeWA",
  authDomain: "sscreation-6f2d1.firebaseapp.com",
  projectId: "sscreation-6f2d1",
  storageBucket: "sscreation-6f2d1.appspot.com",
  messagingSenderId: "877819177048",
  appId: "1:877819177048:web:7066f04b53638f8bc9822d",
  measurementId: "G-JG9E4LEFHT"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth =getAuth(app);
export const provider =new GoogleAuthProvider(app)