  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA_He4KrRJMYgzheplK76gbd1GNahDIOkY",
    authDomain: "test-auth-90984.firebaseapp.com",
    projectId: "test-auth-90984",
    storageBucket: "test-auth-90984.appspot.com",
    messagingSenderId: "586312744250",
    appId: "1:586312744250:web:4474c737cd8fef3cab6403"
  };


  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);