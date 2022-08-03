
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCslTvUktF2aw33YvEsSRf_phvPvnyFRgI",
  authDomain: "eday-5d23e.firebaseapp.com",
  projectId: "eday-5d23e",
  storageBucket: "eday-5d23e.appspot.com",
  messagingSenderId: "345525600525",
  appId: "1:345525600525:web:eb3dd1f2e08916ab5fb044"
};

const app = initializeApp(firebaseConfig);

const firestoreApp = () => {
    return app
}
export default firestoreApp