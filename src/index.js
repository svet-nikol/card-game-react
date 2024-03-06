import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { TriersProvider } from "./contexts/triers";
import { LeadersProvider } from "./contexts/leaders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TriersProvider>
      <LeadersProvider>
        <RouterProvider router={router}></RouterProvider>
      </LeadersProvider>
    </TriersProvider>
  </React.StrictMode>,
);
