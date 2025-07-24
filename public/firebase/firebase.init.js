import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVbx0BNXkf5jMuPVDSQ13454HjPQkD9Bs",
    authDomain: "teeth-wizard-7e336.firebaseapp.com",
    projectId: "teeth-wizard-7e336",
    storageBucket: "teeth-wizard-7e336.appspot.com",
    messagingSenderId: "445087993093",
    appId: "1:445087993093:web:1f7ac8927a427b09983b6c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
