import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import B_EX_1_INFO from "./SeccionB/B_EX_1_INFO";
import B_EX_1 from "./SeccionB/B_EX_1";
import A_Completed from "./Seccion_A/A_completed";
import TrackProgress from "./Seccion_A/TrackProgress";
import BonusWelcome from "./Seccion_A/BonusWelcome";
import BonusInfo from "./Seccion_A/BonusInfo";
import TextReader from "./Reader/TextReader";
import GuiaB from "./SeccionB/GuiaB";
import MapaB from "./SeccionB/MapaB";
import B_EX_2_INFO from "./SeccionB/B_EX_2_INFO";
import B_EX_3_INFO from "./SeccionB/B_EX_3_INFO";
import TextReaderMainB from "./Reader/TextReaderMainB";
import ReadAllB from "./SeccionB/ReadAllB";
import B_EX_3 from "./SeccionB/B_EX_3";
import B_EX_1_EXAMPLE from "./SeccionB/B_EX_1_EXAMPLE";
import B_EX_2 from "./SeccionB/B_EX_2";
import B_BONUS from "./SeccionB/B_BONUS";
import AudioPartB from "./SeccionB/AudioPartB";
import AudioFull from "./SeccionB/AudioFullB";

const SeccionB = () => {
  return (
    <Routes>
      <Route path="/guia" element={<GuiaB />} />
      <Route path="/mapa" element={<MapaB/>} />
      <Route path="/ex1_info" element={<B_EX_1_INFO />} />
      <Route path="/ex1_example" element={<B_EX_1_EXAMPLE />} />
      <Route path="/ex1" element={<B_EX_1 />} />
      <Route path="/ex2_info" element={<B_EX_2_INFO />} />
      <Route path="/ex2" element={<B_EX_2 />} />
      <Route path="/ex3_info" element={<B_EX_3_INFO />} />
      <Route path="/ex3" element={<B_EX_3 />} />
      <Route path="/completed" element={<A_Completed />} />
      <Route path="/track_calma" element={<TrackProgress />} />
      <Route path="/track_478" element={<TrackProgress />} />
      <Route path="/track_abd" element={<TrackProgress />} />
      <Route path="/bonus" element={<B_BONUS />} />
      <Route path="/bonus_info" element={<BonusInfo />} />
      <Route path="/bonus_welcome" element={<BonusWelcome />} />
      <Route path="/content" element={<TextReaderMainB />} />
      <Route path="/content/read/" element={<ReadAllB />} />
      <Route path="/content/read/:id" element={<TextReader />} />
      <Route path="/content/audio/" element={<AudioFull />} />
      <Route path="/content/audio/:id" element={<AudioPartB />} />
      <Route path="/*" element={<Navigate to="/mapa" replace />} />
    </Routes>
  );
};

export default SeccionB;
