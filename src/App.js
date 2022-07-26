import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Sidebar/Navbar';
// import Dashboard from './pages/Dashboard/Dashboard';
import CompaniesView from './pages/Companies/CompaniesView';
// import Companies from './pages/Companies/Companies';
// import AddCompany from './pages/Companies/Add';
import AddCompany from './pages/Companies/AddCompany';
// import Container from './pages/Dashboard/components/layout/Container';



function App() {
  return (

    <div className="App">
    <Navbar />
    <Routes>
      {/* <Route exact path="/dashboard" element={<Container />}></Route> */}
      <Route exact path="/companies" element={<CompaniesView />}></Route>
      <Route exact path="/add" element={<AddCompany />}></Route>
      </Routes>
    </div>
     );
}

export default App;
