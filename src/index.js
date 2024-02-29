import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { TriersProvider } from "./contexts/triers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TriersProvider>
      <RouterProvider router={router}></RouterProvider>
    </TriersProvider>
  </React.StrictMode>,
);
