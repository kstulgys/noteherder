import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
  apiKey: "YOURS",
  authDomain: "YOURS",
  databaseURL: "YOURS",
  projectId: "YOURS",
  storageBucket: "YOURS",
  messagingSenderId: "YOURS"
});

const db = database(app)

export default Rebase.createClass(db)