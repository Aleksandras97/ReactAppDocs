const firebaseConfig = {
    apiKey: "AIzaSyDRGnsWqwTKkzAXS4VyZv3SdB1udCt0FIo",
    authDomain: "docs-2ce2d.firebaseapp.com",
    projectId: "docs-2ce2d",
    storageBucket: "docs-2ce2d.appspot.com",
    messagingSenderId: "78512291582",
    appId: "1:78512291582:web:671a50923a904f80166faf"
  };

  const app = !firebase.apps.lenght ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firebase();

  export { db };