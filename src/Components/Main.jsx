import React, {useState} from 'react'
import { Container, Carousel, Image, Row, Col, Button } from 'react-bootstrap'
import labPhoto from '../Pictures/LabPhotos/LabPhoto_2020.png'
import summaryPhoto from '../Pictures/Research/Connectivity2014SummaryImage.png'
import Brocas from '../Pictures/Research/BrocasPaperImage.jpg'
import Hybrid_BCI from '../Pictures/Research/Hybrid_BCI.png'
import BehavioralPriming from '../Pictures/Research/BehavioralPriming.png'
import ERC_Naming from '../Pictures/Research/ERC_Naming.png'
import ERC_Naming2 from '../Pictures/Research/ERC_Naming2.jpg'

const Main = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <Container>
      <div className="mt-4 p-5 bg-secondary text-white rounded">
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
      </div>

      <hr className="featurette-divider" />
      <Row>
        <Col>
          <h2 className="featurette-heading">
            Significance of event related causality (ERC) in eloquent neural
            networks
          </h2>
          <p>
            During most cognitive tasks neural activity is propagated across
            large-scale cortical networks on very brief time scales. Studying
            such transient and complex systems calls for a short time-window on
            the one hand, and a great extent of recording sites in the brain, on
            the other. These demands are not easily satisfied, as short time
            intervals do not provide enough data-points to model the dynamics of
            large-scale brain networks. This limitation can be overcome by using
            multiple realizations of the same process, e.g. multiple trials of a
            task (Ding et al., 2000), but the price to be paid is that
            traditional statistical methods, cannot be used to assess the
            significance of event-related changes in the estimated dynamics of
            the system. We propose event-related causality (ERC) with
            two-dimensional (2D) moving average, a new method for assessing
            statistical confidence in such cases. This approach can be applied
            when very few realizations, or trials, of a studied process are
            available, including when only single trials are available. ERC with
            2D moving average ensures precise embedding of statistical
            significance in two-dimensional space, and can analyze much longer
            time series. We also propose a criterion for statistical model
            selection, based on both goodness of fit and width of confidence
            intervals. Using ERC with 2D moving average to study naming under
            conditions in which perceptual modality and ambiguity were
            contrasted, we observed new patterns of task-related neural
            propagation that were nevertheless consistent with expectations
            derived from previous studies of naming. ERC with 2D moving average
            is uniquely suitable to both research and clinical applications and
            can be used to estimate the statistical significance of neural
            propagation for both cognitive neuroscientific studies and
            functional brain mapping prior to resective surgery for epilepsy and
            brain tumors.
          </p>
          <Button
            href="https://www.sciencedirect.com/science/article/pii/S0893608022000351"
            target="_blank"
          >
            Full Text
          </Button>
        </Col>
        <Col>
          <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Image fluid src={ERC_Naming}></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image fluid src={ERC_Naming2}></Image>
            </Carousel.Item>
          </Carousel>
          {index==0 ? <p>
              "Results of event-related causality (ERC) estimated with 2D moving average of window size 7x7 time-frequency points, averaged across all patients. 
            Naming of unambiguous objects (top panel), ambiguous objects (middle panel), and naming to auditory description (bottom panel). The task interval starting 
            at stimulus onset and ending at speech onset is divided in half with the first half in the left column and the second half in the right column. Both width 
            and color (thin-yellow: weak; thick-red: strong) of arrows represent intensity of high-gamma activity propagation, using a single colorscale across all plots.
             Linear arrows: propagation between regions of interest (ROIs, Ghosh et al., 2010). Circular arrows: propagation within ROIs. Top 90% of propagations depicted
              to reduce complexity of the figure."
              </p> : <p>
              "An example of performance of a bivariate smoothing model, dependently on the number of data-points included in 2D moving average (window size), for ERC containing 20 channels (K=20) recorded during naming of ambiguous objects. Top panel shows results in patient #8. Top-left: the difference between the ERC values and the values of 2D moving average. Top-middle; confidence interval. Top-right: the criterion for model selection. X and Y axes represent window size by distances from the center-point of the window of 2D moving average, in time-points and frequency-points accordingly. Colorscale (min-max) at the right. Bottom panel shows the criterion for model selection averaged over all patients (bottom-left) and their projections on time-plane (bottom-middle), and on frequency-plane (bottom-right)."
                </p>}
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
            robotics, addresses limitations of current BMIs.{' '}
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
          <Image fluid src={Hybrid_BCI}></Image>
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
          <Image fluid src={Brocas}></Image>
        </Col>
      </Row>
    </Container>
  )
}

export default Main
