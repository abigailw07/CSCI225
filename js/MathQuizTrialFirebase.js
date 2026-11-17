/* ELIMINT - FIREBASE CONNECTION */

// Import Firebase tools
import { initializeApp } from
    "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from
    "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from
    "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";


/* 1. FIREBASE CONFIGURATION */

const firebaseConfig = {
  apiKey: "AIzaSyCY39bghUvRd7hjO0wnF8fcITefnMiwEt8",
  authDomain: "elimint-8a166.firebaseapp.com",
  projectId: "elimint-8a166",
  storageBucket: "elimint-8a166.firebasestorage.app",
  messagingSenderId: "620351834009",
  appId: "1:620351834009:web:bb10e165936ac8cb4c3508"
};


/* 2. CHECK CONFIGURATION */

const isConfigured =
    firebaseConfig.apiKey !== "YOUR_API_KEY" &&
    firebaseConfig.projectId !== "YOUR_PROJECT_ID" &&
    firebaseConfig.appId !== "YOUR_APP_ID";


/* 3. INITIALIZE FIREBASE */

let app = null;
let auth = null;
let db = null;
let googleProvider = null;

if (isConfigured) {
    app = initializeApp(firebaseConfig);

    auth = getAuth(app);

    db = getFirestore(app);

    googleProvider = new GoogleAuthProvider();
}


/* 4. GET CURRENT USER */

export function getCurrentUser() {
    if (!auth) {
        return Promise.resolve(null);
    }

    // Wait until Firebase finishes checking
    // whether the user is already signed in.
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            user => {
                unsubscribe();
                resolve(user);
            },
            error => {
                unsubscribe();
                reject(error);
            }
        );
    });
}


/* 5. GOOGLE SIGN-IN */

export async function signInWithGoogle() {
    if (!auth || !googleProvider) {
        throw new Error(
            "Firebase is not configured. Add your Firebase configuration first."
        );
    }

    const result = await signInWithPopup(
        auth,
        googleProvider
    );

    return result.user;
}


/* 6. GOOGLE SIGN-OUT */

export async function signOutUser() {
    if (!auth) {
        return;
    }

    await signOut(auth);
}


/* 7. SAVE QUIZ SCORE */

export async function saveQuizScore(quizData) {
    if (!auth || !db) {
        throw new Error(
            "Firebase is not configured."
        );
    }

    const user = auth.currentUser;

    if (!user) {
        throw new Error(
            "You must be signed in to save your score."
        );
    }

    const scoreRecord = {
        userId: user.uid,
        userName: user.displayName || "Student",
        userEmail: user.email || "",
        quizId: quizData.quizId,
        quizTitle: quizData.quizTitle,
        correct: quizData.correct,
        total: quizData.total,
        percentage: quizData.percentage,
        completedAt: serverTimestamp()
    };

    const documentReference = await addDoc(
        collection(db, "quizScores"),
        scoreRecord
    );

    return documentReference.id;
}


/* 8. FIREBASE STATUS */

export function isFirebaseConfigured() {
    return isConfigured;
}