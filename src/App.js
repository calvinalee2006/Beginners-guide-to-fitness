import React from 'react';
import Introduction from './components/introduction';
import Questions from './components/questions';
import Sex from './components/sex';
import Male from './components/male';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

 export default function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Introduction />} />
        <Route path="/questions" element= {<Questions />} />
        <Route path="/sex" element= {<Sex />} />
        <Route path="/male" element= {<Male />} />
      </Routes>
    </Router>
  );
}
