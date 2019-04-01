import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAHmiFK8bDlzwQQr6SANYAQu9GDM1sFXsc",
    authDomain: "generation-girl.firebaseapp.com",
    databaseURL: "https://generation-girl.firebaseio.com",
    projectId: "generation-girl",
    storageBucket: "generation-girl.appspot.com",
    messagingSenderId: "697322570011"
};
  
firebase.initializeApp(config);

export default firebase;