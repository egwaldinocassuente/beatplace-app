import { initializeApp, getApp } from "firebase/app";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  collectionGroup,
  connectFirestoreEmulator,
  deleteDoc,
  doc,
  documentId,
  FieldValue,
  increment,
  initializeFirestore,
  getFirestore,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
  writeBatch,
  limit,
  startAfter,
} from "firebase/firestore";

import {
  getAuth,
  connectAuthEmulator,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  updatePassword,
  fetchSignInMethodsForEmail,
  RecaptchaVerifier,
  signInWithCredential,
  PhoneAuthProvider,
} from "firebase/auth";

import {
  getFunctions,
  connectFunctionsEmulator,
  httpsCallable,
} from "firebase/functions";
import { connectStorageEmulator, getStorage } from "firebase/storage";

export const app = initializeApp({
  apiKey: "AIzaSyCk29g0QV3oJxAHArm6rs5SLpSiNyUNEWo",
  authDomain: "beatplace-app.firebaseapp.com",
  projectId: "beatplace-app",
  storageBucket: "beatplace-app.appspot.com",
  messagingSenderId: "486000034529",
  appId: "1:486000034529:web:f22bcfa154259f7f146da0",
  measurementId: "G-3N9ZZ448Y4",
});

initializeFirestore(app, { ignoreUndefinedProperties: true });

export const dbFirestore = getFirestore();
export const functionsApp = getFunctions(getApp());
export const authApp = getAuth();
export const storage = getStorage();

export const connectEmulatorFs = connectFirestoreEmulator;
export const connectEmulatorAuth = connectAuthEmulator;
export const connectEmulatorFn = connectFunctionsEmulator;
export const connectStorage = connectStorageEmulator;

export const firestore = {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  collectionGroup,
  connectFirestoreEmulator,
  deleteDoc,
  doc,
  documentId,
  FieldValue,
  increment,
  initializeFirestore,
  getFirestore,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
  writeBatch,
  limit,
  startAfter,
};

export const auth = {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  updatePassword,
  getAuth,
  fetchSignInMethodsForEmail,
  signInWithPhoneNumber,
  signInWithCredential,
  PhoneAuthProvider,
  RecaptchaVerifier,
};

export const functions = { httpsCallable };
