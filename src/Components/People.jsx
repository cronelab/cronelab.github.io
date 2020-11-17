import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/bootstrap-social.css";
import Crone from "../Pictures/People/Nathan.jpg";

import Alex from "../Pictures/People/Staff/Alex.png";
import Anna from "../Pictures/People/Staff/Anna.jpg";
import Chris from "../Pictures/People/Staff/Chris.jpg";
import Yujing from "../Pictures/People/Staff/Yujing.jpg";
import Sam from "../Pictures/People/Staff/Sam.png";

import Dan from "../Pictures/People/GradStudents/Dan.jpg";
import Mark from "../Pictures/People/GradStudents/Mark.jpg";
import Qinwan from "../Pictures/People/GradStudents/Qinwan.jpg";
import Steve from "../Pictures/People/GradStudents/Steve.jpg";
import Tessy from "../Pictures/People/GradStudents/Tessy.png";
import Raphael from "../Pictures/People/GradStudents/Raphael.png";

import Andrew from "../Pictures/People/Alumn/Andrew.jpg";
import Michael from "../Pictures/People/Alumn/Michael.jpg";
import Griff from "../Pictures/People/Alumn/Griff.jpg";
import GuyHotson from "../Pictures/People/Alumn/GuyHotson.jpg";
import HeatherBenz from "../Pictures/People/Alumn/HeatherBenz.jpg";
import KyleRupp from "../Pictures/People/Alumn/KyleRupp.jpg";
import MattFifer from "../Pictures/People/Alumn/MattFifer.jpg";
import MaxCollard from "../Pictures/People/Alumn/MaxCollard.png";
import Dave from "../Pictures/People/Alumn/Dave.jpg";

const People = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Image src={Crone} thumbnail></Image>
        </Col>
        <Col md={9}>
          <a href="mailto:ncrone@jhmi.edu">Nathan Crone, M.D.</a> is an
          Associate Professor of Neurology and director of the Cognitive
          Neurophysiology and Brain-Machine Interface Laboratory. Dr. Crone
          leads a long-standing research program using intracranial EEG to study
          human brain mechanisms of language, attention, and motor function.
          This research is carried out in patients undergoing intracranial EEG
          monitoring prior to epilepsy surgery. Dr. Crone serves as an attending
          neurologist in the Johns Hopkins Hospital where his clinical work
          focuses on the management of drug-resistant epilepsy,
          electroencephalography, and intraoperative monitoring. Dr. Crone's
          technical expertise is in the fields of cognitive neuroscience and
          neurophysiology, including the rapid characterization and application
          of human neurophysiological responses for both functional brain
          mapping and brain-machine interfaces.
        </Col>
      </Row>
      <h2 style={{ textAlign:"center"}}>Graduate Students</h2>
      <br />
      <Row>
        <Col>
          <Image
            src={Tessy}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <div class="caption">
            <h3>Tessy Thomas</h3>
            <a
              href="mailto:tlal1@jhu.edu"
              class="btn btn-linkedin btn-sm"
              role="button"
            >
              <span class="glyphicon glyphicon-envelope"></span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/tessy-lal-9a0569a0/"
              title="LinkedIn"
              class="btn btn-linkedin btn-sm"
            >
              <i class="fa fa-linkedin fa-fw"></i> LinkedIn
            </a>
            <p>
              Tessy is pursuing a Ph.D. in biomedical engineering. She is
              interested in researching the neural correlates of simple and
              complex upper limb movements within population-level activity
              (ECoG) and localized multi-unit and single-unit activity. She is
              working to expand our understanding of movement representations in
              the human brain in order to increase the range of control achieved
              by motor BCIs.
            </p>
          </div>{" "}
        </Col>
        <Col>
          <Image
            src={Dan}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <div class="caption">
            <h3>
              Daniel Candrea <small>M.S.</small>
            </h3>
            <a
              href="mailto:tlal1@jhu.edu"
              class="btn btn-linkedin btn-sm"
              role="button"
            >
              <span class="glyphicon glyphicon-envelope"></span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/dancandrea/"
              title="LinkedIn"
              class="btn btn-linkedin btn-sm"
            >
              <i class="fa fa-linkedin fa-fw"></i>
              LinkedIn
            </a>
            <p>
              Dan is pursuing a Ph.D in biomedical engineering, and is
              interested in upper limb motor control through brain-computer
              interface (BCI), and corresponding neural representations of
              movement. Specifically, he is researching BCI control through
              attempted finger movements using micro-electrode arrays (MEAs) and
              electrocorticography (ECoG).
            </p>
          </div>
        </Col>
        <Col>
          <Image
            src={Qinwan}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <div class="caption">
            <h3>Qinwan Rabbani</h3>
            <a
              href="mailto:blank@gmail.com"
              class="btn btn-linkedin btn-sm"
              role="button"
            >
              <span class="glyphicon glyphicon-envelope"></span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/qinwan-rabbani"
              title="LinkedIn"
              class="btn btn-linkedin btn-sm"
            >
              <i class="fa fa-linkedin fa-fw"></i> LinkedIn
            </a>
            <p>
              Qinwan is a Ph.D. student in Electrical Engineering interested in
              data-driven feature learning approaches, especially those adapted
              from automatic speech recognition (ASR) and related fields. His
              research goals are two-fold: 1) to tease out the natural spatial
              and spectrotemporal encoding scheme of different speech
              representations in the brain, particularly for covert or imagined
              speech, and 2) to discover and develop better, more natural and
              biofidelic, neural decoding targets.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image
            src={Mark}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <div class="caption">
            <h3>Mark Hays</h3>
            <a
              href="mailto:mhays6@jhu.edu"
              class="btn btn-linkedin btn-sm"
              role="button"
            >
              <span class="glyphicon glyphicon-envelope"></span>
              Email
            </a>
            <p>
              Mark is pursuing a Ph.D. in Biomedical Engineering. He is
              interested in developing models of human brain network
              connectivity and applying graph theoretical analysis to these
              models. He is currently working on mapping epileptogenic networks
              using single pulse electrical stimulation to characterize
              electrophysiological connectivity and build models of seizure
              dynamics.{" "}
            </p>
          </div>
        </Col>
        <Col>
          <Image
            src={Steve}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <div class="caption">
            <h3>Shiyu Luo</h3>
            <a
              href="mailto:sluo15@jhu.edu"
              class="btn btn-linkedin btn-sm"
              role="button"
            >
              <span class="glyphicon glyphicon-envelope"></span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/shiyu-luo-12b873124/"
              title="LinkedIn"
              class="btn btn-linkedin btn-sm"
            >
              <i class="fa fa-linkedin fa-fw"></i> LinkedIn
            </a>
            <p>
              Shiyu, who also goes by Steve, is pursuing a Ph.D. in Biomedical
              Engineering. His research interests are in automatic speech
              recognition from neural signals (ECoG), brain-computer interface
              for speech decoding and communication, and neural representation
              of speech production and encoding in human brain.
            </p>
          </div>
        </Col>
        <Col>
          <Image
            src={Raphael}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <div class="caption">
            <h3>Raphael Bechtold</h3>
            <a
              href="mailto:rbechtold@jhu.edu"
              class="btn btn-linkedin btn-sm"
              role="button"
            >
              <span class="glyphicon glyphicon-envelope"></span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/raphael-bechtold-659b9314b/"
              title="LinkedIn"
              class="btn btn-linkedin btn-sm"
            >
              <i class="fa fa-linkedin fa-fw"></i> LinkedIn
            </a>
            <p>
              Raphael is pursuing a Master’s of Science and Engineering degree
              in Biomedical Engineering. He is responsible for the creation of
              the 2D image reconstructions for patients undergoing intracranial
              monitoring prior to resective surgery for drug-resistant epilepsy.
              His long-term interests include understanding and decoding the
              neural mechanisms behind imagined speech.
            </p>
          </div>
        </Col>
      </Row>

      <h2 style={{ textAlign:"center"}}>Staff</h2>
      <br />
      <Row>
        <Col>
          <Image
            src={Anna}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>

          <div class="caption">
            <h3>
              Anna Korzeniewska <small>Ph.D.</small>
            </h3>
            <h5>Research Associate</h5>
            <a
              href="mailto:akorzen@jhmi.edu"
              class="btn btn-linkedin btn-sm"
              role="button"
            >
              <span class="glyphicon glyphicon-envelope"></span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/anna-korzeniewska-a468805/"
              title="LinkedIn"
              class="btn btn-linkedin btn-sm"
            >
              <i class="fa fa-linkedin fa-fw"></i> LinkedIn
            </a>
            <p>
              Anna Korzeniewska studies dynamics of cerebral functional and/or
              pathological connectivity to identify brain networks responsible
              for diseases and distinguish them from brain networks responsible
              for motor, language, and other cognitive functions. Anna develops
              advanced mathematical methods and applications for determining
              information flow within neural networks, and is interested in
              translational research aimed to help people with brain diseases or
              dysfunctions.
            </p>
          </div>
        </Col>
        <Col>
          <Image
            src={Chris}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <div class="caption">
            <h3>
              Christopher Coogan <small>M.S.</small>
            </h3>
            <h5>Software Engineer</h5>
            <a
              href="mailto:c.coogan2201@gmail.com"
              class="btn btn-linkedin btn-sm"
              role="button"
            >
              <span class="glyphicon glyphicon-envelope"></span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-coogan-88a85085/"
              title="LinkedIn"
              class="btn btn-linkedin btn-sm"
            >
              <i class="fa fa-linkedin fa-fw"></i> LinkedIn
            </a>
            <a
              href="https://github.com/TheBrainChain/"
              title="Github"
              class="btn btn-github btn-sm"
            >
              <i class="fa fa-github"></i> Github
            </a>

            <p>
              Chris received his MS in Biomedical Engineering from the
              University of Minnesota where his research focused on motor BCIs
              and virtual reality. He maintains several local and cloud-based
              servers for data storage and processing as a systems
              administrator. He also builds and maintains various applications
              for the real-time streaming and processing of neural data as a
              software developer. His interests include novel stimulus
              presentation paradigms utilizing virtual/augmented reality (AR/VR)
              and the internet of things (IoT).
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image
            src={Yujing}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <div class="caption">
            <h3>
              Yujing Wang <small>Ph.D.</small>
            </h3>
            <h5>Postdoc</h5>
            <a
              href="mailto:wangyujing07@gmail.com"
              class="btn btn-linkedin btn-sm"
              role="button"
            >
              <span class="glyphicon glyphicon-envelope"></span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/wangyujing07/"
              title="LinkedIn"
              class="btn btn-linkedin btn-sm"
            >
              <i class="fa fa-linkedin fa-fw"></i>
              LinkedIn
            </a>
            <p>
              Yujing is a postdoctoral fellow who earned her Ph.D. in
              Bioengineering at the University of Maryland College Park. She is
              interested in mapping language function using intracranial EEG
              (iEEG) recordings in patients undergoing neurosurgical resections
              for epilepsy or tumors. Her research goal is to use iEEG language
              mapping to detail the timing of neural activation and network
              interactions during complex cognitive tasks.
            </p>
          </div>
        </Col>
        <Col>
          <Image
            src={Alex}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <div class="caption">
            <h3>
              Alex Weiss <small>DPhil</small>
            </h3>
            <h5>Postdoc</h5>

            <a
              href="mailto:alexanderrweiss@gmail.com"
              class="btn btn-linkedin btn-sm"
              role="button"
            >
              <span class="glyphicon glyphicon-envelope"></span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/weissar/"
              title="LinkedIn"
              class="btn btn-linkedin btn-sm"
            >
              <i class="fa fa-linkedin fa-fw"></i>
              LinkedIn
            </a>
            <p>
              Alexander Weiss, DPhil, holds a doctorate in biomedical sciences
              from the University of Oxford and NINDS in the area of human and
              rodent intracortical neural signal analysis. His current research
              focuses on functional localization of the regions involved in
              language processing, investigating the connectivity and
              causal-relations between cortical and sub-cortical regions
              throughout the language pathway, and decoding the neural
              correlates of this data. He is interested in the translational
              applications of experimental neurosurgery, in-vivo
              electrophysiological recording and stimulation, and cognitive
              behavioral assays of circuit function for the development of
              speech-based brain machine interfaces.
            </p>
          </div>
        </Col>
        <Col>
          <Image
            src={Sam}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <div class="caption">
            <h3>Samyak Shah</h3>
            <h5>M.S.</h5>
            <h5>Research Assistant</h5>

            <a
              href="mailto:sshah99@jhu.edu"
              class="btn btn-linkedin btn-sm"
              role="button"
            >
              <span class="glyphicon glyphicon-envelope"></span>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/samyak-shah-68410561/"
              title="LinkedIn"
              class="btn btn-linkedin btn-sm"
            >
              <i class="fa fa-linkedin fa-fw"></i> LinkedIn
            </a>
            <p>
              Samyak's interests are in data science and machine learning
              pertaining to biomedical signals. He is currently working on
              developing the EpiWatch algorithm, with the goal of real-world
              detection and classification of seizures using limited data.
            </p>
          </div>
        </Col>
      </Row>

      <h2 style={{ textAlign:"center"}}>Lab Alumni</h2>
      <br />

      <Row>
        <Col>
          <Image
            src={Andrew}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <div class="caption">
            <h3>Andrew Masteller</h3>
            <p>M.S. '20</p>
          </div>
        </Col>
        <Col>
          <Image
            src={Michael}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <h3>Michael Chan</h3>
          <p>M.S. '19</p>
        </Col>
        <Col>
          <Image
            src={Griff}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <h3>Griffin Milsap</h3>
          <p>Ph.D. '18</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image
            src={MaxCollard}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <h3>Max Collard</h3>
          <p>B.S. '15</p>
        </Col>
        <Col>
          <Image
            src={Dave}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <h3>Dave McMullen</h3>
          <p>M.D./Ph.D</p>
        </Col>
        <Col>
          <Image
            src={GuyHotson}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <h3>Guy Hotson</h3>
          <p>Ph.D. '16</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image
            src={KyleRupp}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <h3>Kyle Rupp</h3>
          <p>Ph.D. '18</p>
        </Col>
        <Col>
          <Image
            src={MattFifer}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <h3>Matt Fifer</h3>
          <p>Ph.D. '15</p>
        </Col>
        <Col>
          <Image
            src={HeatherBenz}
            roundedCircle
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              float: "left",
            }}
          ></Image>
          <h3>Heather Benz</h3>
          <p>Ph.D. '15</p>
        </Col>
      </Row>
    </Container>
  );
};

export default People;

// <div class="container">
// <h2>Collaborators</h2>
// <div class="row top10">
//   <div class="col-md-3 col-sm-4">
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           William S. Anderson <small>M.D., Ph.D.</small>
//         </h3>
//         <p>
//           Assistant Professor of Neurological Surgery<br />
//           Johns Hopkins University
//         </p>
//       </div>
//     </div>
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           Matthew Johannes <small>Ph.D.</small>
//         </h3>
//         <p>
//           Project Manager<br />
//           JHU Applied Physics Laboratory
//         </p>
//       </div>
//     </div>
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           Nima Mesgarani <small>Ph.D.</small>
//         </h3>
//         <p>
//           Assistant Professor of Electrical Engineering<br />
//           Columbia University
//         </p>
//       </div>
//     </div>
//   </div>

//   <div class="col-md-3 col-sm-4">
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           Anastasios Bezerianos <small>Ph.D.</small>
//         </h3>
//         <p>
//           Professor of Medical Physics<br />
//           University of Patras
//         </p>
//       </div>
//     </div>
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           Kapil Katyal <small>M.S.</small>
//         </h3>
//         <p>
//           Project Manager<br />
//           JHU Applied Physics Laboratory
//         </p>
//       </div>
//     </div>
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           Alcimar Soares <small>Ph.D.</small>
//         </h3>
//         <p>
//           Associate Professor of Electrical Engineering<br />
//           Universidade Federal de Uberlandia
//         </p>
//       </div>
//     </div>
//   </div>

//   <div class="col-md-3 col-sm-4">
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           Dana Boatman <small>Ph.D.</small>
//         </h3>
//         <p>
//           Professor of Neurology<br />
//           Johns Hopkins University
//         </p>
//       </div>
//     </div>
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           Robert Knight <small>M.D.</small>
//         </h3>
//         <p>
//           Professor of Psychology and Neuroscience<br />
//           UC Berkeley
//         </p>
//       </div>
//     </div>
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           Nitish Thakor <small>Ph.D.</small>
//         </h3>
//         <p>
//           Professor of Biomedical Engineering<br />
//           Johns Hopkins University
//         </p>
//       </div>
//     </div>
//   </div>

//   <div class="col-md-3 col-sm-4">
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           Piotr Franaszczuk <small>Ph.D.</small>
//         </h3>
//         <p>
//           Associate Professor of Neurology<br />
//           Johns Hopkins University
//         </p>
//       </div>
//     </div>
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           Sabine Kastner <small>M.D., Ph.D.</small>
//         </h3>
//         <p>
//           Professor of Psychology<br />
//           Princeton University
//         </p>
//       </div>
//     </div>
//     <div class="thumbnail">
//       <div class="caption">
//         <h3>
//           Brock Wester <small>Ph.D.</small>
//         </h3>
//         <p>
//           Project Manager<br />
//           JHU Applied Physics Laboratory
//         </p>
//       </div>
//     </div>
//   </div>

// </div>

// </div>
