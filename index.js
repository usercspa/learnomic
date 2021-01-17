// Import stylesheets
import './style.css';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

// Document elements
const login = document.getElementById('login');
const userbookContainer = document.getElementById('userbook-container');

const form = document.getElementById('reply');
const input = document.getElementById('message');
const userbook = document.getElementById('userbook');

var loginListener = null;

async function main() {


  const ui = new firebaseui.auth.AuthUI(firebase.auth());

  // Called when the user clicks the login button
login.addEventListener("click",
 () => {
    if (firebase.auth().currentUser) {
      // User is signed in; allows user to sign out
      firebase.auth().signOut();
    } else {
      // No user is signed in; allows user to sign in
      ui.start("#firebaseui-auth-container", uiConfig);
    }
});


}  