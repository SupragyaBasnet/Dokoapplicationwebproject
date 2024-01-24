import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ShopContextProvider from "./Context/ShopContext"; // Import ShopContextProvider

import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root")); // Use createRoot instead of ReactDOM.createRoot
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);

reportWebVitals();
