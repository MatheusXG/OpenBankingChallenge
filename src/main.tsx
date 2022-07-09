import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import React from "react";
import Home from "./pages/Home/";
import Dashboard from "./pages/Dashboard";
import Investments from "./pages/Investments";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS >
      <BrowserRouter>
        <Auth0ProviderWithRedirectCallback
          domain="dev-aunji2-4.us.auth0.com"
          clientId="zPkIfKZkZum2PjUSjl9NUOeRcWCgFDOj"
          redirectUri={"http://localhost:3000/dashboard"}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="dashboard" element={<ProtectedRoute component={Dashboard} />}></Route>
            <Route path="investments" element={<ProtectedRoute component={Investments} />}></Route>
          </Routes>
        </Auth0ProviderWithRedirectCallback>
      </BrowserRouter>
    </ChakraProvider>
    ,
  </React.StrictMode>
);
