import React, {useState} from 'react';
import Introduction from './components/introduction';
import Questions from './components/beginning';
import Male from './components/questions';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

 export default function App() {

  const [data, setData] = useState({})

  const getData = (data) => {
    setData(data)
  }

  return (
    //Revisit <Route path="/questions" element= {<Male />} /> for Readability!!
    <Router>
      <Routes>
        <Route path= "/" element={<Introduction />} />
        <Route path="/beginning" element= {<Questions getData={getData}  />} />
        <Route path="/personalExercise" element={<personalExercise data={data}/>} />
        <Route path="/questions" element= {<Male />} /> 
      </Routes>
    </Router>
  );
}
