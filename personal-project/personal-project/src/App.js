import React from 'react';
import './App.css';
import navbar from './components/navbar';
import logo from './images/logo-digitalcare-removebg-preview.png';
import logo1 from './images/pngegg.png';
function App() {
  return (
    <div className="App">
      <div className="nav">
          <div className="header">
              <div className="logo">
              <img  id="log1" src={logo1}/>
              <img  id="log" src={logo}/>
              <p id="fuckme"> Digital Health Counseling</p>
              </div> 
              <div className="links">
                  <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>Home</a>
                  <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>Mental Health (A-Z)</a>
                  <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>Self Improvement</a>
                  <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>Psychology</a>
                  <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>Quizzes</a>
                  <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>Appointment</a>
                  <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>Subscribe</a>
                  <a href='https://stackoverflow.com/questions/58722629/react-import-component-from-another-folder-issue'>Help & Support</a>
              </div>  
          </div>
          </div>
          <h1>Hello?</h1>
    </div>

  );
}

export default App;
