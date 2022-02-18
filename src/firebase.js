import { initializeApp} from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_API_ID
  // apiKey: "AIzaSyAV3336S0rZrbIc6J8-OSqqtR-dMJ3k3GE",
  // authDomain: "clone-c2e44.firebaseapp.com",
  // projectId: "clone-c2e44",
  // storageBucket: "clone-c2e44.appspot.com",
  // messagingSenderId: "912394071553",
  // appId: "1:912394071553:web:501805b809f82011f85a00"
};


let app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
export const auth = getAuth();


