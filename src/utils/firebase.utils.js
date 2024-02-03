import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getDoc, setDoc, doc, getFirestore, collection, writeBatch, getDocs, query  } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyCir7Qtk3NSGK6BnYxL1YLeDMRjgakve6w",
    authDomain: "techwave-56dfd.firebaseapp.com",
    projectId: "techwave-56dfd",
    storageBucket: "techwave-56dfd.appspot.com",
    messagingSenderId: "378211356025",
    appId: "1:378211356025:web:b8f55a56da915890ce73a8",
    measurementId: "G-SE2VMHMT67"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const auth = getAuth();

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })
  await batch.commit();
  console.log("done");
}

export const getCatgeoriesAndDocuments = async() => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
    }, {})
  return categoryMap;

}

export const createUserDocumentFromAuth = async (userAuth, additionalInfomration = {}) => {

  const userDocRef = doc(db, 'users', userAuth.uid);  
  const userSnapshot = await getDoc(userDocRef);
  
  
  if(! userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfomration, 
      })
      console.log(userSnapshot);
    }catch(error){
      console.log(error.message);

    }
  }
}

export const createAuthUserWithEmailAndPassword = async( email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
 
}


export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password ) return;
  return await signInWithEmailAndPassword(auth, email, password);

}

export const signOutUser = async ()  => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  
  onAuthStateChanged(auth, callback);

}

