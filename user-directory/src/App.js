import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap"
import Table from './components/Table'
import SearchSection from './components/Search';

const App = () => {
  return (
  <container>
  < SearchSection />
  < Table />
  </container>
  )
}

export default App;
