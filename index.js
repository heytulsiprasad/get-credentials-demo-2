console.log("Hello world!");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8nQgAvS2xc2NRJqJ8P5nYcSENfbF62PA",
  authDomain: "webviewexperiment.firebaseapp.com",
  projectId: "webviewexperiment",
  storageBucket: "webviewexperiment.appspot.com",
  messagingSenderId: "416904239519",
  appId: "1:416904239519:web:1893ecf1e511ae295405aa",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const form = document.querySelector(".form");
const signupBtn = document.querySelector(".signup-btn");

const loginHandler = async () => {
  let { email, password } = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  if (email && password) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      throw err;
    }
  }
};

const signupHandler = async () => {
  let { email, password } = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  if (email && password) {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      throw err;
    }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form/Login Clicked");
  loginHandler();
});

signupBtn.addEventListener("click", (e) => {
  console.log("Signup Clicked");
  signupHandler();
});

const code = document.querySelector(".code");

firebase.auth().onAuthStateChanged((user) => {
  console.log("Auth State Changed");

  if (user) {
    code.innerHTML = `
      <pre>
        <code>${JSON.stringify(user, null, 2)}</code>
      </pre>
    `;
  } else {
    code.innerHTML = ``;
  }
});

const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", () => {
  console.log("Logout button clicked!");

  firebase.auth().signOut();
});
