import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAeo4wXWwm39ULZzqIGqvKo2acVMjxdjmQ',
  authDomain: 'fir-atbau.firebaseapp.com',
  projectId: 'fir-atbau',
  storageBucket: 'fir-atbau.appspot.com',
  messagingSenderId: '548868687886',
  appId: '1:548868687886:web:35ad0486acd4978abfd45f',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
