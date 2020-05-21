import * as firebase from 'firebase/app';

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDwGg_G5Qk4sjSxc-X5HI65veT-CNZvIJ4",
    authDomain: "covidgold-a0d36.firebaseapp.com",
    databaseURL: "https://covidgold-a0d36.firebaseio.com",
    projectId: "covidgold-a0d36",
    storageBucket: "covidgold-a0d36.appspot.com",
    messagingSenderId: "1007228586210",
    appId: "1:1007228586210:web:4598f47e35a950893536bb",
    measurementId: "G-SHMPVHWCSF"
  };

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()