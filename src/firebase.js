import { initializeApp} from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_API_ID
  // apiKey: "AIzaSyDrJhvK4MmPdafiW8V2loBKE0G5WqKMlDg",
  // authDomain: "clone-73815.firebaseapp.com",
  // projectId: "clone-73815",
  // storageBucket: "clone-73815.appspot.com",
  // messagingSenderId: "71210730635",
  // appId: "1:71210730635:web:7b575083e7b703284b008e"
};


let app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
export const auth = getAuth();


