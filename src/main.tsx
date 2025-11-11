import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'

import "react-day-picker/style.css";
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = document.getElementById("root");
const queryClient = new QueryClient();

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);

