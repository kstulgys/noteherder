import Rebase from 're-base'
import * as firebase from 'firebase'; 

const app = firebase.initializeApp({
  apiKey: "YOURS",
  authDomain: "YOURS",
  databaseURL: "YOURS",
  projectId: "YOURS",
  storageBucket: "YOURS",
  messagingSenderId: "YOURS"
});

const db = firebase.database(app)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = app.auth()

export default Rebase.createClass(db)