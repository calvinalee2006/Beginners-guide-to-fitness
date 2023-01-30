import React from 'react';
import Introduction from './components/introduction';
import BeforeBeginning from './components/beginning';
import NoSurvey from './components/UserPages/noSurvey';
import Questions from './components/questions';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

 export default function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Introduction />} />
        <Route path="/beginning" element= {<BeforeBeginning  />} />
        <Route path="/questions"  exact element= {<Questions />}  />
        <Route path ="noSurvey"  exact element ={<NoSurvey />}/> 
      </Routes>
    </Router>
  );
}
