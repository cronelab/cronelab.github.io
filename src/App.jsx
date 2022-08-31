import React from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './Components/Main';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './Components/People';
import Publications from './Components/Publications';
import LangaugeConnectivity from './Components/ResearchAreas/LanguageConnectivity';
import FunctionalMapping from './Components/ResearchAreas/FunctionalMapping';
import Epiwatch from './Components/ResearchAreas/Epiwatch';
import MotorBMI from './Components/ResearchAreas/MotorBMI';
import SeizureConnectivity from './Components/ResearchAreas/SeizureConnectivity';
import SpeechBMI from './Components/ResearchAreas/SpeechBMI';
import SPES from './Components/ResearchAreas/SPES';
import ContactUs from './Components/ContactUs';
import Photos from './Components/Photos';
import JobOpenings from './Components/JobOpenings';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container fluid>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/people" element={<People />} />
          <Route exact path="/publications" element={<Publications />} />
          <Route exact path="/languageconnectivity" element={<LangaugeConnectivity />} />
          <Route exact path="/seizureconnectivity" element={<SeizureConnectivity />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/photos" element={<Photos />} />
          <Route exact path="/spes" element={<SPES />} />
          <Route exact path="/functionalmapping" element={<FunctionalMapping />} />
          <Route exact path="/speechbmi" element={<SpeechBMI />} />
          <Route exact path="/motorbmi" element={<MotorBMI />} />
          <Route exact path="/epiwatch" element={<Epiwatch />} />
          <Route exact path="/jobs" element={<JobOpenings />} />

        </Routes>
        <hr />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
