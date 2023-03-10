import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { StateProvider } from './components/StateProvider';
import reducer, { initialState} from './components/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
         <Route path='/'>
          <StateProvider initialState={initialState} reducer={reducer}>
          <App />
          </StateProvider>
            
          </Route>      
     
  </Router>
);

