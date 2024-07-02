import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.tsx";
import "./styles/tailwind.css";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
