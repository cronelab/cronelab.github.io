import React, { useState } from 'react';
import {
  Container, Carousel, Image, Row, Col, Button,
} from 'react-bootstrap';
import labPhoto from '../Pictures/LabPhotos/LabPhoto_2020.png';
import Brocas from '../Pictures/Research/BrocasPaperImage.jpg';
import Hybrid_BCI from '../Pictures/Research/Hybrid_BCI.png';
import ERC_Naming from '../Pictures/Research/ERC_Naming.png';
import ERC_Naming2 from '../Pictures/Research/ERC_Naming2.jpg';
import CorticalSites1 from '../Pictures/Research/CorticalSites1.jpg';
import CorticalSites2 from '../Pictures/Research/CorticalSites2.jpg';
import CorticalSites3 from '../Pictures/Research/CorticalSites3.jpg';
import CorticalSites4 from '../Pictures/Research/CorticalSites4.jpg';
import CorticalSites5 from '../Pictures/Research/CorticalSites5.jpg';

function Main() {
  const [index1, setIndex1] = useState(0);

  const handleSelect1 = (selectedIndex) => {
    setIndex1(selectedIndex);
  };

  const [index2, setIndex2] = useState(0);

  const handleSelect2 = (selectedIndex) => {
    setIndex2(selectedIndex);
  };

  return (
    <Container>
      <div className="mt-4 p-5 bg-secondary text-white rounded">
        <Image fluid src={labPhoto} />
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
            Cortical sites critical to language function act as connectors between language subnetworks
          </h2>
          <p>
            Historically, eloquent functions have been viewed as localized to focal areas of human cerebral cortex, while more recent studies suggest they are encoded by distributed networks. We examined the network properties of cortical sites defined by stimulation to be critical for speech and language, using electrocorticography from sixteen participants during word-reading. We discovered distinct network signatures for sites where stimulation caused speech arrest and language errors. Both demonstrated lower local and global connectivity, whereas sites causing language errors exhibited higher inter-community connectivity, identifying them as connectors between modules in the language network. We used machine learning to classify these site types with reasonably high accuracy, even across participants, suggesting that a site’s pattern of connections within the task-activated language network helps determine its importance to function. These findings help to bridge the gap in our understanding of how focal cortical stimulation interacts with complex brain networks to elicit language deficits.
          </p>
          <Button
            href="https://www.nature.com/articles/s41467-024-51839-z"
            target="_blank"
          >
            Full Text
          </Button>
        </Col>
        <Col>
          <Carousel interval={null} activeIndex={index1} onSelect={handleSelect1}>
            <Carousel.Item>
              <Image fluid src={CorticalSites1} />
            </Carousel.Item>
            <Carousel.Item>
              <Image fluid src={CorticalSites2} />
            </Carousel.Item>
            <Carousel.Item>
              <Image fluid src={CorticalSites3} />
            </Carousel.Item>
            <Carousel.Item>
              <Image fluid src={CorticalSites4} />
            </Carousel.Item>
            <Carousel.Item>
              <Image fluid src={CorticalSites5} />
            </Carousel.Item>
          </Carousel>

          {index1 === 0 && (
            <p>
              "A DES was used either intraoperatively (depicted) or in the epilepsy monitoring unit to identify sites critical to language and speech. These were subdivided into cortical regions causing language errors (LE) or speech arrest (SA). B We recorded continuous ECoG while participants engaged in a word-reading task. C We generated one static network for each participant using pairwise high-gamma correlations. Color-coded adjacency matrix shown; the color in position (m,n) reflects to the high-gamma correlation between electrode m and n. r is the Fisher-transformed Pearson correlation. Community partitions were discovered using modularity maximization. Electrodes have been re-ordered so those belonging to the same community are adjacent (boundaries shown in black lines). D Spring-loaded network plot; nodes (circles) that are more strongly connected are drawn more closely together. The size of each node is proportional to its strength. Community membership is indicated by the fill color of each node. The nodes outlined in blue are LE nodes. E Network metrics were calculated—PC (participation coefficient), strength, CC (clustering coefficient), LE (local efficiency), and EC (eigenvector centrality). Metric values for every node are plotted; large colored points represent critical nodes and small gray points are all other nodes. Boxes demonstrate the median and interquartile range. We used these metrics to train machine learning classifiers to predict which nodes would be critical to language and speech. Example data (C–E) are provided from a single participant (n = 1) for each visualization."
            </p>
          )}

          {index1 === 1 && (
            <p>
              "PC participation coefficient, S strength, CC clustering coefficient, LEff local efficiency, EC eigenvector centrality. A Diagram illustrating coassignment. Two yellow-outlined coassigned nodes are found within the same community (dark blue fill); two blue-outlined nodes are found in two different communities (magenta and orange fill)—i.e., not coassigned. B Diagram demonstrating graph metrics. The large magenta node in the top panel has a high PC—it connects across all communities in this network. The same node has a low clustering coefficient (its neighbors are not themselves connected, denoted by dashed arrows) and low local efficiency (long path lengths between its neighbors). In the bottom panel, the large dark blue node has high strength, i.e., a high sum of connection weights. The large orange node has higher eigenvector centrality than the smaller orange node; both have the same number of connections, but the larger node’s connections themselves have more connections. C Intuition for three node types. Connector nodes connect across communities (high PC), while their neighbors do not connect as closely to each other (low CC, LEff). Global hubs connect to many nodes across the network (high PC, high S, likely high EC). Local hubs connect densely in their neighborhood (low PC, high CC/LEff)."
            </p>
          )}

          {index1 === 2 && (
            <p>
              "PC participation coefficient, S strength, CC clustering coefficient, LEff local efficiency, EC eigenvector centrality. A Composite of all participants’ electrodes colocalized on a single template brain. Speech arrest nodes (yellow fill) were primarily located in ventral premotor regions, but also in ventrolateral prefrontal and ventral temporal regions. Language error nodes (blue fill) were widely distributed in perisylvian regions. B Three example participant brain reconstructions. Node color (filled) represents community assignment, and node size is proportional to its participation coefficient. The outline color indicates critical nodes (blue—LE node, yellow—SA node). C Corresponding three network diagrams. The electrode position is spring-weighted (stronger connections draw electrodes closer together). Fill color indicates community, and if present, outline color indicates critical node type (LE vs. SA)."
            </p>
          )}

          {index1 === 3 && (
            <p>
              "PC participation coefficient, S strength, CC clustering coefficient, LEff local efficiency, EC eigenvector centrality. *p &lt; 0.05. **p &lt; 0.01. ***p &lt; 0.001 (FDR-corrected). A Histogram of the number of communities per participant (n = 16). B Coassignment percentages vs. chance. Coassignment is calculated as the mean % of critical, LE, or SA node pairs per participant sharing a community. Empiric chance was calculated based on 1000 random shuffles of community assignment per participant, presented as mean coassignment% per participant with bars indicating standard error of mean (n = 16 for Critical, n = 15 for LE and SA). Critical nodes, language error nodes, and speech arrest nodes were significantly more likely to coassign in the same communities than chance (p &lt; 0.001 for all, one-tailed estimate against empiric chance)."
            </p>
          )}

          {index1 === 4 && (
            <p>
              "For within-participant classification, participants with at least four nodes of the relevant class were included; for critical nodes, LE nodes, and SA nodes, n = 15, 10, and 8, respectively. For across-participant classification, participants with at least one node of the relevant class were included—for critical nodes, LE nodes, and SA nodes, n = 16, 13, and 13, respectively. A–D Each dot represents average classification balanced accuracy or sensitivity for a single participant."
            </p>
          )}
        </Col>
      </Row>

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
            intervals.
          </p>
          <Button
            href="https://www.sciencedirect.com/science/article/pii/S0893608022000351"
            target="_blank"
          >
            Full Text
          </Button>
        </Col>
        <Col>
          <Carousel interval={null} activeIndex={index2} onSelect={handleSelect2}>
            <Carousel.Item>
              <Image fluid src={ERC_Naming} />
            </Carousel.Item>
            <Carousel.Item>
              <Image fluid src={ERC_Naming2} />
            </Carousel.Item>
          </Carousel>

          {index2 === 0 ? (
            <p>
              "Results of event-related causality (ERC) estimated with 2D moving average of window size 7x7 time-frequency points, averaged across all patients."
            </p>
          ) : (
            <p>
              "An example of performance of a bivariate smoothing model, dependently on the number of data-points included in 2D moving average (window size), for ERC containing 20 channels."
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
