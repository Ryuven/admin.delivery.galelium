// firebase.js — общая инициализация Firebase
// Используется в: admin-login.html (import { auth })
// dashboard/app.js инициализирует Firebase независимо (не импортирует этот файл)

import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js';
import { getAuth }        from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js';
import { getFirestore }   from 'https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js';

const cfg = {
  apiKey:            'AIzaSyCjIAMFuwLKwmjChCuiz-MHLv5WZOczAAE',
  authDomain:        'delivery-galelium.firebaseapp.com',
  projectId:         'delivery-galelium',
  storageBucket:     'delivery-galelium.firebasestorage.app',
  messagingSenderId: '982466555080',
  appId:             '1:982466555080:web:c77ccbff0e71e540ddc9fd',
};

const firebaseApp = initializeApp(cfg);

export const auth = getAuth(firebaseApp);
export const db   = getFirestore(firebaseApp);
