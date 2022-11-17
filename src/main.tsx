import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { GlobalProvider } from "./providers/GlobalProvider/GlobalProvider";
import { rootRoutes } from "./routes/rootRoute";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={rootRoutes} />
    </GlobalProvider>
  </React.StrictMode>
);
