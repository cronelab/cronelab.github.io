import Main from './Components/Main'
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './Components/People'
import Publications from './Components/Publications'
import LangaugeConnectivity from './Components/ResearchAreas/LanguageConnectivity'
import FunctionalMapping from './Components/ResearchAreas/FunctionalMapping'
import Epiwatch from './Components/ResearchAreas/Epiwatch'
import MotorBMI from './Components/ResearchAreas/MotorBMI'
import SeizureConnectivity from './Components/ResearchAreas/SeizureConnectivity'
import SpeechBMI from './Components/ResearchAreas/SpeechBMI'
import SPES from './Components/ResearchAreas/SPES'
import ContactUs from './Components/ContactUs'
import Photos from './Components/Photos'
import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
function App() {
  return (
    <Router>
      <Container>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/people">
            <People />
          </Route>

          <Route path="/publications">
            <Publications />
          </Route>

          <Route path="/languageconnectivity">
            <LangaugeConnectivity />
          </Route>
          <Route path="/seizureconnectivity">
            <SeizureConnectivity />
          </Route>
          <Route path="/contactus">
            <ContactUs/>
          </Route>
          <Route path="/photos">
            <Photos/>
          </Route>
          <Route path="/spes">
            <SPES />
          </Route>
          <Route path="/functionalmapping">
            <FunctionalMapping />
          </Route>
          <Route path="/speechbmi">
            <SpeechBMI />
          </Route>
          <Route path="/motorbmi">
            <MotorBMI />
          </Route>
          <Route path="/epiwatch">
            <Epiwatch />
          </Route>
        </Switch>
        <hr/>
        <Footer></Footer>
      </Container>
    </Router>
  );
}

export default App;
