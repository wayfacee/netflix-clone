import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCb5ow2sEnI0qXr8I_fJ6KjP7sPtEJdwbE",
  authDomain: "netflix-13f0a.firebaseapp.com",
  projectId: "netflix-13f0a",
  storageBucket: "netflix-13f0a.appspot.com",
  messagingSenderId: "1000032494381",
  appId: "1:1000032494381:web:0e1c501a855bc84b35a9a4"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
