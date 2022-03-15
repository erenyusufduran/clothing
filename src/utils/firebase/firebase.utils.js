import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrHvO9LjmAFKk_UiowWgAasSOvdqKN81k",
  authDomain: "clothing-db-dbc89.firebaseapp.com",
  projectId: "clothing-db-dbc89",
  storageBucket: "clothing-db-dbc89.appspot.com",
  messagingSenderId: "14372031427",
  appId: "1:14372031427:web:e3c525feba8450956a0b76",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
