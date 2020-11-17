import { Container, Col, Row, Image } from "react-bootstrap";
import spesPic from "../../Pictures/Research/SPES_Website_Figure.jpg";
const SPES = () => {
  return (
    <>
      <Container>
      <h3 style={{ textAlign: "center" }}> Single Pulse Electrical Stimulation </h3>
        <hr />{" "}

        <Row>
          <Col>
            <Image src={spesPic} fluid   style={{
              position: "relative",
              height: "400px",
              float: "left",
            }}></Image>
          
            As it is now widely accepted that focal seizures arise from
            coordinated activity of epileptic networks, advanced surgical
            therapies for drug-resistant epilepsy are increasingly adopting
            techniques that reflect this network-based focus. Effective
            treatments must provide not only accurate localization of the
            seizure onset zone, but also a comprehensive understanding of the
            broader epileptogenic network responsible for the generation and
            propagation of seizures. Single-pulse electrical stimulation (SPES)
            is one of these novel techniques that is increasingly used to
            estimate connectivity between sites in the brain recorded from
            patients undergoing intracranial EEG monitoring. By methodologically
            stimulating pairs of electrodes throughout the brain, the locations
            and magnitudes of responses in the remaining electrodes can be used
            to map electrophysiological relationships between stimulation and
            response sites. Specifically, SPES is known to produce
            characteristic cortico-cortical evoked potentials in regions that
            are believed to have direct excitatory connections from the
            stimulated site. The quantitative features of these evoked
            potentials are then used to describe the effective connectivity
            between these sites. While this effective connectivity may represent
            physiological or functional connections between regions, it is also
            increasingly used to quantify and map underlying epileptic networks.
            Our lab is investigating the use of SPES to determine how the
            connectivity of epileptogenic regions differ from that of
            non-epileptogenic regions, to provide insight into mechanisms of
            seizure generation and propagation from a network perspective. By
            applying graph analytics to the connections mapped by SPES, we hope
            to gain a deeper understanding of the interactive relationships
            between regions and their roles within the larger network.
            Alterations in network connectivity metrics of epileptogenic regions
            may be used to identify seizure onset zones or characterize regions
            with widespread influence throughout the network that can indicate
            important surgical targets.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SPES;
