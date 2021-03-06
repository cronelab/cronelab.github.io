import React from "react";
import { Container, Jumbotron, Image, Row, Col, Button } from "react-bootstrap";
import labPhoto from "../Pictures/LabPhotos/LabPhoto_2020.png";
import summaryPhoto from "../Pictures/Research/Connectivity2014SummaryImage.png";
import Brocas from "../Pictures/Research/BrocasPaperImage.jpg";
import Hybrid_BCI from "../Pictures/Research/Hybrid_BCI.png";
import BehavioralPriming from "../Pictures/Research/BehavioralPriming.png";
const Main = () => {
  return (
    <Container fluid>
      <Jumbotron>
        <Image fluid src={labPhoto}></Image>
        <p>
          Under the direction of Dr. Nathan Crone, the JHU Cognitive
          Neurophysiology and BMI Lab is working to identify and validate
          electrophysiological signatures of human cortical processing and to
          use them to study the neural mechanisms of motor, sensory, and
          language functions. Where applicable, we are applying this
          understanding to the development of assistive systems for individuals
          with disabilities.
        </p>
      </Jumbotron>
      <hr className="featurette-divider" />
      <Row>
        <Col>
          <h2 className="featurette-heading">
            Large-scale dynamics in the paradox of behavioral priming
          </h2>
          <p>
            Behavioral responses to a perceptual stimulus are typically faster
            with repeated exposure to the stimulus (behavioral priming). This
            implicit learning mechanism is critical for survival but impaired in
            a variety of neurological disorders, including Alzheimer’s disease.
            Many studies of the neural bases for behavioral priming have
            encountered an interesting paradox: in spite of faster behavioral
            responses, repeated stimuli usually elicit weaker neural responses
            (repetition suppression). Several neurophysiological models have
            been proposed to resolve this paradox, but noninvasive techniques
            for human studies have had insufficient spatial-temporal precision
            for testing their predictions. We used the unparalleled precision of
            electrocorticography (ECoG) to analyze the timing and magnitude of
            task-related changes in neural activation and propagation while
            patients named novel vs repeated visual objects. Stimulus repetition
            was associated with faster verbal responses and decreased neural
            activation (repetition suppression) in ventral occipito-temporal
            cortex (VOTC) and left prefrontal cortex (LPFC). Interestingly, we
            also observed increased neural activation (repetition enhancement)
            in LPFC and other recording sites.
          </p>

          <Image
            fluid
            style={{
              "max-width": "60%",
              display: "inline",
              float: "left",
              paddingRight: "10px",
            }}
            src={BehavioralPriming}
          ></Image>
          <p>
            {" "}
            Moreover, with analysis of high gamma propagation we observed
            increased top-down propagation from LPFC into VOTC, preceding
            repetition suppression. The latter results indicate that repetition
            suppression and behavioral priming are associated with strengthening
            of top-down network influences on perceptual processing, consistent
            with predictive coding models of repetition suppression, and they
            support a central role for changes in large-scale cortical dynamics
            in achieving more efficient and rapid behavioral responses.
          </p>
        </Col>
      </Row>

      <hr className="featurette-divider" />
      <Row>
        <Col>
          <h2 className="featurette-heading">
            Semi-Autonomous iEEG Brain-Machine Interfaces
          </h2>
          <p>
            We developed a novel system, the Hybrid Augmented Reality Multimodal
            Operation Neural Integration Environment (HARMONIE). This system
            utilizes hybrid input, supervisory control, and intelligent robotics
            to allow users to identify an object (via eye tracking and computer
            vision) and initiate (via brain-control) a semi-autonomous
            reach-grasp-and-drop of the object by the JHU/APL Modular Prosthetic
            Limb MPL. The novel approach demonstrated in this proof-of-principle
            study, using hybrid input, supervisory control, and intelligent
            robotics, addresses limitations of current BMIs.{" "}
          </p>
          <Button
            href="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6683036&tag=1"
            target="_blank"
          >
            Full Text
          </Button>
          <Button
            href="https://ieeexplore.ieee.org/document/6683036/media#media"
            target="_blank"
          >
            Videos
          </Button>
        </Col>
        <Col>
          <Image fluid center src={Hybrid_BCI}></Image>
        </Col>
      </Row>
      <hr className="featurette-divider" />

      <Row>
        <Col>
          <h2 className="featurette-heading">Redefining Broca's Area</h2>
          <p>
            During the cued production of words, a temporal cascade of neural
            activity proceeds from sensory representations of words in the
            temporal cortex to their corresponding articulatory gestures in the
            motor cortex. Broca's area mediates this cascade through reciprocal
            interactions with temporal and frontal motor regions. Contrary to
            classNameic notions of the role of Broca's area in speech, while the
            motor cortex is activated during spoken responses, Broca's area is
            surprisingly silent. Moreover, when novel strings of articulatory
            gestures must be produced in response to nonword stimuli, neural
            activity is enhanced in Broca's area, but not in the motor cortex.
            These unique data provide evidence that Broca's area coordinates the
            transformation of information across large-scale cortical networks
            involved in spoken word production. In this role, Broca's area
            formulates an appropriate articulatory code to be implemented by the
            motor cortex.
          </p>
          <Button
            href="http://www.pnas.org/content/112/9/2871.short"
            target="_blank"
          >
            Full Text
          </Button>
        </Col>
        <Col>
          <Image fluid center src={Brocas}></Image>
        </Col>
      </Row>

      <hr className="featurette-divider" />
      <Row>
        <Col>
          <h2 className="featurette-heading">
            Seizure Connectivity Patterns Occur Interictally
          </h2>
          <p>
            The directionality and intensity of high frequency activity (70-175
            Hz) propagation was estimated during ictal and interictal
            recordings. These analyses revealed prominent divergence and
            convergence of activity propagation at sites identified by
            epileptologists as part of the ictal onset zone. In patients with
            focal ictal onsets, the patterns of propagation recorded during
            pre-ictal and interictal intervals were very similar to those
            recorded during seizures. The ability to characterize epileptogenic
            networks interictally could have important clinical implications by
            reducing the need for prolonged invasive monitoring to record
            spontaneous seizures.
          </p>
          <Button
            href="http://www.sciencedirect.com/science/article/pii/S1053811914005552"
            target="_blank"
          >
            Full Text
          </Button>
        </Col>
        <Col>
          <Image fluid center src={summaryPhoto}></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
