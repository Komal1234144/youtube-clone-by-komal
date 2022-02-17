import { initializeApp} from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  // appId: process.env.REACT_APP_FIREBASE_API_ID
  apiKey: "AIzaSyBum6B6ipTK4KzMiNmxXNqQo38Hhf2I9ys",
  authDomain: "clone-dfe2b.firebaseapp.com",
  projectId: "clone-dfe2b",
  storageBucket: "clone-dfe2b.appspot.com",
  messagingSenderId: "606119642129",
  appId: "1:606119642129:web:906e99abe5290229e41db0"
};


let app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
export const auth = getAuth();


