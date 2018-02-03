import Firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDjYLYKax5KDNK_3Jt7x6I3jErindwuOWY",
    authDomain: "turnout-65ca3.firebaseapp.com",
    databaseURL: "https://turnout-65ca3.firebaseio.com",
    projectId: "turnout-65ca3",
    storageBucket: "turnout-65ca3.appspot.com",
    messagingSenderId: "613234129830"
}

export const firebaseApp = Firebase.initializeApp(config)

export const eventsRef = Firebase.database().ref().child('events')