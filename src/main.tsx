import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./main.scss";

export const initAPIMock = async () => {
  const { worker } = await import("./backend/worker");
  await worker.start({
    onUnhandledRequest: "bypass",
  });
};
const queryClient = new QueryClient();

const initApplication = async () => {
  await initAPIMock();
  const rootElement = document.getElementById("root");

  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found");
  }
};

initApplication();
