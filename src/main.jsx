import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// ce code configure et rend une application React en utilisant
// le composant App comme point d'entrée, tout en activant le StrictMode pour aider au développement.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
