import React from 'react';
import Introduction from './components/introduction';
import Stretching from './components/Stretches/stretching'
import Cardio from "./components/Cardio/cardio";
// import WorkoutJournal from "./components/noSurvey/WorkoutJournal";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


 export default function App() {

  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Introduction />} />
        <Route path = '/cardio/stretching' exact element={<Stretching />} />
        <Route path = 'cardio' exact element ={<Cardio />} />
        {/* <Route path = 'WorkoutJournal' exact element={<WorkoutJournal/>}/> */}
      </Routes>
    </Router>
  );
}
