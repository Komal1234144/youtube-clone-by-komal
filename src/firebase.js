import { initializeApp} from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  // appId: process.env.REACT_APP_FIREBASE_API_ID
  apiKey: "AIzaSyBzRmn0NiYn2NTrTnvwgeWt9AkUdhYOKuA",
  authDomain: "clone-3c469.firebaseapp.com",
  projectId: "clone-3c469",
  storageBucket: "clone-3c469.appspot.com",
  messagingSenderId: "436002615543",
  appId: "1:436002615543:web:76591dfb89f744eb2ee3f2"
};


let app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
export const auth = getAuth();


