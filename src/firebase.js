import { initializeApp} from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  // appId: process.env.REACT_APP_FIREBASE_API_ID
  apiKey: "AIzaSyBAwtrCISQjDIKeVtiu6tnpEEEZiUOca1w",
  authDomain: "clone-4a2ec.firebaseapp.com",
  projectId: "clone-4a2ec",
  storageBucket: "clone-4a2ec.appspot.com",
  messagingSenderId: "785783727005",
  appId: "1:785783727005:web:e32af307c6e9c780028574"
};

let app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
export const auth = getAuth();


