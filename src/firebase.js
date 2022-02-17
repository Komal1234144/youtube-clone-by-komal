import { initializeApp} from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  // appId: process.env.REACT_APP_FIREBASE_API_ID
  apiKey: "AIzaSyDhQUBB0cU9NVSxyACBn23K_OpHm0dznAs",
  authDomain: "clone-d789a.firebaseapp.com",
  projectId: "clone-d789a",
  storageBucket: "clone-d789a.appspot.com",
  messagingSenderId: "1003227083371",
  appId: "1:1003227083371:web:da559b0c224a7bac11372e"
};


let app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
export const auth = getAuth();


