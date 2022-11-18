import React from 'react';
import Introduction from './components/introduction';
import Questions from './components/questions';
import {BrowserRouter as Router, Route} from 'react-router-dom';

 export default function App() {
  return (
    <Router>
      <Route>
        <Introduction/>
      </Route>
      <Route path="/questions">
        <Questions />
      </Route>
    </Router>
  );
}
