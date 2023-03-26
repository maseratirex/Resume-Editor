import React, { Component } from "react";
import ContactInfo from './components/ContactInfo';
import EducationInfo from './components/EducationInfo';
import ExperienceInfo from './components/ExperienceInfo';

class App extends Component {
  render() {
    return (
      <div id='root'>
        <ContactInfo />
        <div style={{flex: 1, border: '1px solid black'}}><EducationInfo /></div>
        <div style={{flex: 1, border: '1px solid black'}}><ExperienceInfo /></div>
      </div>
    );
  }
}

export default App;
