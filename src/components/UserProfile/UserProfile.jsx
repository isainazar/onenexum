import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProfileProvider } from "../../contexts/ProfileContext";
import TestInfo from "./TestInfo";
import Interest from "./Interest";
import JournalInfo from "./JournalInfo";
import JournalMain from "./JournalMain";
import JournalNote from "./JournalNote";
import JournalNotes from "./JournalNotes";
import JournalQuestions from "./JournalQuestions";
import Life from "./Life";
import PersonalData from "./PersonalData";
import TestResultMain from "./TestResultMain";
import UserMain from "./UserMain";
import UserProfileWelcome from "./UserProfileWelcome";
import UserSpaceInfo from "./UserSpaceInfo";
import UserTest from "./UserTest";
import Work from "./Work";
import TestResultAll from "./TestResultAll";
import TestMap from "./TestMap";
import TestAInfo from "./TestAInfo";
import JournalDecisions from "./JournalDecisions";
import JournalDecisionsSecond from "./JournalDecisionsSecond";

const UserProfile = () => {
  return (
    <ProfileProvider>
      <Routes>
        <Route path="/info" element={<UserSpaceInfo />} />
        <Route path="/know_more" element={<UserProfileWelcome />} />
        <Route path="/main" element={<UserMain />} />
        <Route path="/data" element={<PersonalData />} />
        <Route path="/life" element={<Life />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/test/:id" element={<UserTest />} />
        <Route path="/test_map" element={<TestMap />} />
        <Route path="/test_info" element={<TestInfo />} />
        <Route path="/test_info/:id" element={<TestAInfo />} />
        <Route path="/test_result" element={<TestResultMain />} />
        <Route path="/test_result-all" element={<TestResultAll />} />
        <Route path="/work" element={<Work />} />
        <Route path="/journal" element={<JournalMain />} />
        <Route path="/journal_decisions" element={<JournalDecisions />} />
        <Route path="/journal_decisions&q" element={<JournalDecisionsSecond />} />
        <Route path="/journal_info" element={<JournalInfo />} />
        <Route path="/journal_notes" element={<JournalNotes />} />
        <Route path="/journal_notes/:id" element={<JournalNote />} />
        <Route path="/journal_questions" element={<JournalQuestions />} />
        <Route path="/*" element={<Navigate to="/mapa" replace />} />
      </Routes>
    </ProfileProvider>
  );
};

export default UserProfile;
