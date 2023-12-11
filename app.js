import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { auth } from './config.js';

const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // email.value = ''
    // password.value = ''
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
        const user = res.user;
        console.log(user);
        window.location = './login.html'
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
});