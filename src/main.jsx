import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABkTcgTKZ7BD9AYMPH1AaGP2al-2fkjfY",
  authDomain: "libreria-liber-art.firebaseapp.com",
  projectId: "libreria-liber-art",
  storageBucket: "libreria-liber-art.appspot.com",
  messagingSenderId: "786605510372",
  appId: "1:786605510372:web:c39f238656dff0330626f1",
  measurementId: "G-7897XYX78H"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
