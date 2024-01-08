import {RouterProvider,} from "react-router-dom";
  import "./index.css";
  import  ReactDOM from "react-dom/client";
import router from "./Routes/Router";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="max-w-7xl mx-auto">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
);