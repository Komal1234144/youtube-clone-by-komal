import { initializeApp} from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  // appId: process.env.REACT_APP_FIREBASE_API_ID
  apiKey: "AIzaSyC07ecfH6-X8Hp1arNJuS1dyv66y_p32us",
  authDomain: "clone-95057.firebaseapp.com",
  projectId: "clone-95057",
  storageBucket: "clone-95057.appspot.com",
  messagingSenderId: "1032251112493",
  appId: "1:1032251112493:web:f5f35a5389cfeca2c24ca4"  
};


let app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
export const auth = getAuth();


