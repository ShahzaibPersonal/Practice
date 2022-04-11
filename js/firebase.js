
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIrYTTHspe-RI63NcS1MK2d6y8oEYs0G0",
    authDomain: "todo-fc0b9.firebaseapp.com",
    projectId: "todo-fc0b9",
    storageBucket: "todo-fc0b9.appspot.com",
    messagingSenderId: "672106542167",
    appId: "1:672106542167:web:45d7caec24022d2ceedf12",
    measurementId: "G-BWEV5R51SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


console.log("firebase");


const subBtn = document.getElementById("subBtn")


subBtn.addEventListener('click',()=>{
    console.log("submit button clicked")
})