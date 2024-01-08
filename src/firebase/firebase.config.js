// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyhv2OjgELSbKbgPLQ9CChoO6R4agFgC4",
  authDomain: "cars-doctor-client-47560.firebaseapp.com",
  projectId: "cars-doctor-client-47560",
  storageBucket: "cars-doctor-client-47560.appspot.com",
  messagingSenderId: "928988439590",
  appId: "1:928988439590:web:22bca2685fb154db1372e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;