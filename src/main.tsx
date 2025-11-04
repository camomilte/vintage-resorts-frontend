import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

