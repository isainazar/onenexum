import React, { useEffect } from "react";
import "./App.scss";
import LoginRouter from "./routes/LoginRouter";
import { AuthProvider } from "./contexts/AuthContext";

import ReactGA from "react-ga4";
import CookieConsent from "react-cookie-consent";
import { UserProvider } from "./contexts/UserContext";
//ReactGA.initialize("G-T3LVJV3D17");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

function App() {
  return (
    <section onContextMenu={(e) => e.preventDefault()}>
      <AuthProvider>
       
          <LoginRouter />
      </AuthProvider>
      <CookieConsent
        debug={false}
        buttonText="Acepto"
        style={{
          background: "whitesmoke",
          color: "black",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
        buttonStyle={{
          background: "#6C52BA",
          color: "white",
          fontSize: "13px",
          margin: "2px",
        }}
      >
        Este sitio usa cookies para mejorar tu experiencia.
      </CookieConsent>
    </section>
  );
}

export default App;
