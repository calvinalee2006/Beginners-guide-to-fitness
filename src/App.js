import React, {useState} from 'react';
import Introduction from './components/introduction';
import Questions from './components/beginning';
import Male from './components/questions';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

 export default function App() {



  return (
    //Revisit <Route path="/questions" element= {<Male />} /> for Readability!!
    <Router>
      <Routes>
        <Route path= "/" element={<Introduction />} />
        <Route path="/beginning" element= {<Questions  />} />
        <Route path="/personalExercise" element={<personalExercise/>} />
        <Route path="/questions" element= {<Male />}  /> 
      </Routes>
    </Router>
  );
}
