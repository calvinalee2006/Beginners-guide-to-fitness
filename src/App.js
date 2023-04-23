import React from 'react';
import Introduction from './components/IntroductionPage/Introduction';
import Stretching from './components/Stretches/Stretching'
import Cardio from "./components/Cardio/Cardio";
import WeightTraining from './components/WeightTraining/WeightTraining';
import Diet from './components/Diet/Diet';
import EndPage from './components/EndPage/endPage'
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';



 export default function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Introduction />} />
        <Route path = '/Stretching'  element={<Stretching />} />
        <Route path = 'Stretching/Cardio'  element ={<Cardio />} />
        <Route path = '/Stretching/Cardio/WeightTraining' element = {< WeightTraining/>} />
        <Route path = '/Stretching/Cardio/WeightTraining/Diet' element ={<Diet/>} />
        <Route path = '/Stretching/Cardio/WeightTraining/Diet/endPage' element ={<EndPage />} />
      </Routes>
    </Router>
  );
}
