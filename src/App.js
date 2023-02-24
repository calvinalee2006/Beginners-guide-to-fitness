import React from 'react';
import Introduction from './components/IntroductionPage/introduction';
import Stretching from './components/Stretches/stretching'
import Cardio from "./components/Cardio/cardio";
import WeightTraining from './components/WeightTraining/WeightTraining';
import Diet from './components/Diet/Diet';
// import WorkoutJournal from "./components/noSurvey/WorkoutJournal";
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';


 export default function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Introduction />} />
        <Route path = '/stretching'  element={<Stretching />} />
        <Route path = 'stretching/cardio'  element ={<Cardio />} />
        <Route path = '/stretching/cardio/WeightTraining' element = {< WeightTraining/>} />
        <Route path = '/stretching/cardio/WeightTraining/Diet' element ={<Diet/>} />
        {/* <Route path = 'WorkoutJournal' exact element={<WorkoutJournal/>}/> */}
      </Routes>
    </Router>
  );
}
