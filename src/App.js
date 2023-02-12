import React from 'react';
import Introduction from './components/introduction';
import NoSurvey from './components/noSurvey/noSurvey';
import WorkoutJournal from "./components/noSurvey/WorkoutJournal";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


 export default function App() {

  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Introduction />} />
        <Route path="noSurvey"  exact element ={<NoSurvey />}/> 
        <Route path ='WorkoutJournal' exact element ={<WorkoutJournal/>}/>
      </Routes>
    </Router>
  );
}
