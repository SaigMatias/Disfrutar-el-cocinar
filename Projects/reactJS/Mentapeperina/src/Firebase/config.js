import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB169RJTZ2_ywOUCzOKjOJWw2iAfkLA79M",
  authDomain: "ecommerce-mentapeperina.firebaseapp.com",
  projectId: "ecommerce-mentapeperina",
  storageBucket: "ecommerce-mentapeperina.appspot.com",
  messagingSenderId: "1001410406934",
  appId: "1:1001410406934:web:34729b7c423c4007b62337",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);