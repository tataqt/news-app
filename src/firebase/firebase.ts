import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDrAjUedH_4WoyGMtP8THCDTdDM4pyG234",
  authDomain: "https://news-app-31dfb.web.app/",
  databaseURL: "https://news-app-31dfb.firebaseio.com/",
  projectId: "news-app-31dfb",
  storageBucket: "",
  messagingSenderId: "",
  appId: "news-app-31dfb"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();