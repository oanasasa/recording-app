// import { async } from '@firebase/util';
// import { async } from '@firebase/util';

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  where,
} from "firebase/firestore";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8LkSDzHkE1SOtfHMkf4vPVV1_mt085HQ",
  authDomain: "recording-app-db.firebaseapp.com",
  projectId: "recording-app-db",
  storageBucket: "recording-app-db.appspot.com",
  messagingSenderId: "240084527244",
  appId: "1:240084527244:web:2d082402381d6c7787f3a9",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();
export const storage = getStorage(firebaseApp);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getFilesAndDocuments = async () => {
  const collectionRef = collection(db, "Text Folder");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const fileMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return fileMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "Users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        uid,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const upload = async (textId, textType, blob) => {
  //TODO REPLACE WITH UUID (see uuidv4 on npm)
  // const { uuid } = require('uuidv4');

  const idRandom = `${"_" + Math.random().toString(36).substr(2, 9)}`;
  const reference = ref(storage, `Recordings/${idRandom}`);
  console.log("uploading...");
  await uploadBytes(reference, blob);
  const downloadURL = await getDownloadURL(reference);
  console.log("download is:");
  console.log(downloadURL);
  const recordDocRef = doc(db, "Recordings", idRandom);
  await setDoc(recordDocRef, {
    textType: textType,
    textId: textId,
    url: downloadURL,
    author: auth.currentUser.uid,
  });

  console.log("doc set");
  // }
};

//get files from firestore

export const getCurrentUserRecordings = async () => {
  const collectionRef = collection(db, "Recordings");

  if (!auth.currentUser) {
    // console.log("no current user selected");
    return [];
  } else {
    // console.log(auth.currentUser.uid) ;
    const q = query(collectionRef, where("author", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    const recordingsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      acc.push(docSnapshot.data());
      // console.log(acc);
      return acc;
    }, []);

    return recordingsMap;
  }
};

export const showDataFromFirestore = async () => {
  // const recordDocRef = collection(db, 'Recordings');
  // const q = query(recordDocRef);
  // const querySnapshot = await getDocs(q);
  // const recordingsMap = querySnapshot.docs.reduce(( docSnapshot ) => {
  //     const { name } = docSnapshot.data();
  //     return name;
  // },[])
  // return recordingsMap;
};

export const getByUserId = async () => {
  //mine's
  // const recordDocRef = collection(db, 'Users');
  // const q = query(recordDocRef);
  // const querySnapshot = await getDocs(q);
  // const userMap = querySnapshot.docs.reduce(( docSnapshot ) => {
  //     const { uid, email, displayName } = docSnapshot.data();
  //      console.log(uid, email, displayName);
  // }, {});
  // return userMap;
  // const recordDocRef = doc(db, 'recordings');
  //Alex's code
  // const q = query(collection(db, 'recordings'), where('author', '==', 'SJ7TsH7AmHQDoQudZdWRqoL2Oww2'));
  // const querySnapshot = await getDocs(q);
  // const results = [];
  // querySnapshot.forEach(doc => {
  //     results.push(doc.data());
  // });
  // return results;
  // return db.collection('recordings').document().get();
  // return (
  //     await getRecordings
  //         .where('author', '==', auth.currentUser.uid)
  //         .limit(1)
  // );
};

//signOut

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
