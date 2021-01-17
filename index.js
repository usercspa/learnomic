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

var rsvpListener = null;