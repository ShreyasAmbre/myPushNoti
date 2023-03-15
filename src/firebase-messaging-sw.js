importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js");
firebase.initializeApp({
 apiKey: "AIzaSyAYEeSyIrpzhlZWyzjaeE1b6i3CUdStak4",
 authDomain: "fbmypushnotiangular.firebaseapp.com",
//  databaseURL: "config data from general tab",
 projectId: "fbmypushnotiangular",
 storageBucket: "fbmypushnotiangular.appspot.com",
 messagingSenderId: "601571827609",
 appId: "1:601571827609:web:aae8f8a273489c418ffd08",
//  measurementId: "config data from general tab"
});
const messaging = firebase.messaging();