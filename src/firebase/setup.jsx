
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBI1PnmYn-0lTOL4C3KWrJ7288n2hs0qMk",
  authDomain: "myntra-b8637.firebaseapp.com",
  projectId: "myntra-b8637",
  storageBucket: "myntra-b8637.appspot.com",
  messagingSenderId: "254033131334",
  appId: "1:254033131334:web:b197bc74afe7fc08931747"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)