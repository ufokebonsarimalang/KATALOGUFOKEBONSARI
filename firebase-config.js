// ============================================
// FIREBASE CONFIG - UFO KEBONSARI MALANG
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    getDoc, 
    doc, 
    setDoc, 
    deleteDoc, 
    query, 
    where, 
    orderBy,
    addDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ====== GANTI DENGAN KONFIGURASI FIREBASE KAMU ======
const firebaseConfig = {
    apiKey: "AIzaSyAzDlIWFWrpHyf2xgLYMifLcGmBqc10EW0",
    authDomain: "masterharga.firebaseapp.com",
    projectId: "masterharga",
    storageBucket: "masterharga.firebasestorage.app",
    messagingSenderId: "761584806568",
    appId: "1:761584806568:web:c6672e8fc0c695f15eb09d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const COLLECTIONS = {
    PRODUCTS: "ufo_products",
    SETTINGS: "ufo_settings",
    USERS: "ufo_users",
    PROMO: "ufo_promo"
};

export { db, collection, getDocs, getDoc, doc, setDoc, deleteDoc, query, where, orderBy, addDoc, updateDoc, COLLECTIONS };
jadi ini jadi satu halaman di index html?gak digabung di index?
