import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAE0Z9-iQZSdYbPu6XWhpM4M08sxXgmun4",
  authDomain: "olx-project-a62cf.firebaseapp.com",
  projectId: "olx-project-a62cf",
  storageBucket: "olx-project-a62cf.appspot.com",
  messagingSenderId: "227107668747",
  appId: "1:227107668747:web:65f6ca5969258f1a37d80e"
};

export default firebase.initializeApp(firebaseConfig);