import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forgotpassword from "../components/ForgotPassword/ForgotPassword";
import Landing from "../components/Landing/Landing";
import Login from "../components/Login/Login";
import MultiAnswer from "../components/Quiz/MultiAnswer";
import Quiz from "../components/Quiz/Quiz";
import Resetpassword from "../components/ResetPassword/ResetPassword";
import Info from "../components/SignUp/Info";
import Offer from "../components/SignUp/Offer";
import SignUp from "../components/SignUp/SignUp";
import SuccesAccount from "../components/SignUp/SuccessAccount";
import { UserProvider } from "../contexts/UserContext";
import AppRouter from "./AppRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          index
          path="/landing"
          element={
            <PublicRouter>
              <Landing />
            </PublicRouter>
          }
        />
        <Route
          path="/login"
          element={
            <UserProvider>
            <PublicRouter>
              <Login />
            </PublicRouter>
            </UserProvider>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRouter>
              <SignUp />
            </PublicRouter>
          }
        />

        <Route
          path="/password-reset"
          element={
            <PublicRouter>
              <Resetpassword />
            </PublicRouter>
          }
        />

        <Route
          path="/forgot-password"
          element={
            <PublicRouter>
              <Forgotpassword />
            </PublicRouter>
          }
        />

        <Route
          path="/quiz"
          element={
            <PublicRouter>
              <Quiz />
            </PublicRouter>
          }
        />

        <Route
          path="/suggest"
          element={
            <PublicRouter>
              <MultiAnswer />
            </PublicRouter>
          }
        />
        <Route
          path="/offer"
          element={
            <PublicRouter>
              <Offer />
            </PublicRouter>
          }
        />
        <Route
          path="/account_created"
          element={
            <PublicRouter>
              <SuccesAccount />
            </PublicRouter>
          }
        />
        <Route
          path="/info"
          element={
            <PublicRouter>
              <Info />
            </PublicRouter>
          }
        />

        {/* PRIVATE ROUTER */}

        {
          <Route
            path="/*"
            element={
              <UserProvider>
                {" "}
                <PrivateRouter>
                  <AppRouter />
                </PrivateRouter>
              </UserProvider>
            }
          />
        }
      </Routes>
    </Router>
  );
};

export default LoginRouter;
