// import nécéssaires pour faire d'autres pages
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import { StrictMode } from "react";
import './index.css';


// ce code configure et rend une application React en utilisant
// le composant App comme point d'entrée, tout en activant le StrictMode pour aider au développement.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
