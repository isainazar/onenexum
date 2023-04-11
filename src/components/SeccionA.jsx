import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import A_EX_1_INFO from "./Seccion_A/A_Ex_1_info";
import A_EX_2_INFO from "./Seccion_A/A_Ex_2_info";
import A_EX_3_INFO from "./Seccion_A/A_Ex_3_info";
import GuiaA from "./Seccion_A/GuiaA";
import Mapa from "./Seccion_A/Mapa";
import A_Ex_1 from "./Seccion_A/A_Ex_1";
import A_Ex_2 from "./Seccion_A/A_Ex_2";
import A_Ex_3 from "./Seccion_A/A_Ex_3";
import A_Completed from "./Seccion_A/A_completed";
import TrackProgress from "./Seccion_A/TrackProgress";
import BonusWelcome from "./Seccion_A/BonusWelcome";
import BonusA from "./Seccion_A/BonusA";
import BonusInfo from "./Seccion_A/BonusInfo";
import TextReader from "./Reader/TextReader";
import ReadAll from "./Seccion_A/ReadAll";
import AudioOne from "./Seccion_A/AudioOne";
import TextReaderMainA from "./Reader/TextReaderMainA";
import AudioPart from "./Seccion_A/AudioPart";

const SeccionA = () => {
  return (
    <Routes>
      <Route path="/guia" element={<GuiaA />} />
      <Route path="/mapa" element={<Mapa />} />
      <Route path="/ex1_info" element={<A_EX_1_INFO />} />
      <Route path="/ex1" element={<A_Ex_1 />} />
      <Route path="/ex2_info" element={<A_EX_2_INFO />} />
      <Route path="/ex2" element={<A_Ex_2 />} />
      <Route path="/ex3_info" element={<A_EX_3_INFO />} />
      <Route path="/ex3" element={<A_Ex_3 />} />
      <Route path="/completed" element={<A_Completed />} />
      <Route path="/track_calma" element={<TrackProgress />} />
      <Route path="/track_478" element={<TrackProgress />} />
      <Route path="/track_abd" element={<TrackProgress />} />
      <Route path="/bonus" element={<BonusA />} />
      <Route path="/bonus_info" element={<BonusInfo />} />
      <Route path="/bonus_welcome" element={<BonusWelcome />} />
      <Route path="/content" element={<TextReaderMainA />} />
      <Route path="/content/read/" element={<ReadAll />} />
      <Route path="/content/read/:id" element={<TextReader />} />
      <Route path="/content/audio/" element={<AudioOne />} />
      <Route path="/content/audio/:id" element={<AudioPart />} />
      <Route path="/*" element={<Navigate to="/mapa" replace />} />
    </Routes>
  );
};

export default SeccionA;
