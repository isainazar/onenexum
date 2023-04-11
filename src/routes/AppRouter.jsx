import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Daily from "../components/Daily/Daily";
import TextSelector from "../components/Highlight";
import Home from "../components/Home";
import Payment from "../components/Payment/Payment";
import PaymentInfo from "../components/Payment/PaymentInfo";
import PaymentSuccess from "../components/Payment/PaymentSuccess";
import SeccionA from "../components/SeccionA";
import SeccionB from "../components/SeccionB";
import SleepCategoryOne from "../components/Sleep/SleepCategoryOne";
import SleepCategoryThree from "../components/Sleep/SleepCategoryThree";
import SleepCategoryTwo from "../components/Sleep/SleepCategoryTwo";
import SleepMain from "../components/Sleep/SleepMain";
import SleepPlayer from "../components/Sleep/SleepPlayer";
import UserProfile from "../components/UserProfile/UserProfile";
import Favoritos from "../components/Favoritos/Favoritos";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="seccionA/*" element={<SeccionA />} />
        <Route path="seccionB/*" element={<SeccionB />} />
        <Route path="user/*" element={<UserProfile />} />
        <Route path="payment" element={<Payment />} />
        <Route path="payment/success" element={<PaymentSuccess />} />
        <Route path="payment/premium" element={<PaymentInfo />} />
        <Route path="/sleep" element={<SleepMain />} />
        <Route path="/sleep/category_1" element={<SleepCategoryOne />} />
        <Route path="/sleep/category_2" element={<SleepCategoryTwo />} />
        <Route path="/sleep/category_3" element={<SleepCategoryThree />} />
        <Route path="/sleep/player/:id" element={<SleepPlayer />} />
        <Route path="/favs" element={<Favoritos />} />
        <Route path="/daily" element={<Daily />} /> 
        <Route path="/selector" element={<TextSelector />} /> 
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
  );
};

export default AppRouter;
