import React from 'react';
import Introduction from './components/introduction';
import Stretching from './components/Stretches/stretching'
import Warmup from './components/Warmup/warmup'
import NoSurvey from './components/noSurvey/noSurvey';
import WorkoutJournal from "./components/noSurvey/WorkoutJournal";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


 export default function App() {

  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Introduction />} />
        <Route path = 'stretching' exact element={<Stretching />} />
        <Route path = 'warmup' exact element={<Warmup />} />
        <Route path="noSurvey"  exact element={<NoSurvey />}/> 
        <Route path ='WorkoutJournal' exact element={<WorkoutJournal/>}/>
      </Routes>
    </Router>
  );
}
