import React, { Fragment } from 'react';
import CollapseSidebar from './components/SideBars';
import ListGroup from './components/ListGroups';
import Alert from './components/Alerts';
import CollapseSidebarButton from './components/Buttons';
import MainContentArea from './components/MainContentAreas';
/*
import logo from './logo.svg';
import './App.css';
*/

function App() {
  let tabs = ["Home", "About Me", "Resume", "Projects", "Contact"];

  return (
    <>
      <CollapseSidebar tabs={tabs}/>   
      <div className="container-fluid">
        <div className="row">
          <div className="col min-vh-100 p-4">
            <CollapseSidebarButton />   
            <MainContentArea />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;