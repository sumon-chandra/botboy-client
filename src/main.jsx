import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AOS from "aos";
import "./index.css";
import AuthProvider from "./context-providers/AuthProvider.jsx";

// Import AOS styles
import "aos/dist/aos.css";
AOS.init();

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// React tabs CSS
import "react-tabs/style/react-tabs.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
