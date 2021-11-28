import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC3hEVx2bcdZMFJHqzCacYLKSOY34yA2Ag",
  authDomain: "fir-demo-9f938.firebaseapp.com",
  projectId: "fir-demo-9f938",
  storageBucket: "fir-demo-9f938.appspot.com",
  messagingSenderId: "1002777193621",
  appId: "1:1002777193621:web:88a86855063fb6f295bf9c"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

