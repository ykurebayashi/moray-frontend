import "./main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const initAPIMock = async () => {
  const { worker } = await import("./backend/worker.js");
  await worker.start({
    onUnhandledRequest: "bypass",
  });
};
const queryClient = new QueryClient();

const initApplication = async () => {
  await initAPIMock();
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

initApplication();
