import React from 'react'
import EpiwatchLogo from '../../Pictures/Research/epi-web-logo-410.png'
import Epiwatchv2 from '../../Pictures/Research/epiwatch-v2-400.png'
import {
    Container, Col, Row, Image
} from 'react-bootstrap'
const Epiwatch = () => {
return(
    <>
    
    <Container>
    <h3 style={{ textAlign: "center" }}>Epiwatch </h3>
        <hr />

        <Image src={EpiwatchLogo} fluid></Image>
        <Row>
            <Col>
            <Image src={Epiwatchv2} fluid></Image>
            </Col>
            <Col>

            Epiwatch is a research project with the aim of seizure detection and/or prediction using non-invasive sensor modalities. The motivation behind this goal is preventing SUDEP the leading cause of Epilepsy related mortality. Instead of using invasive ECOG or EEG technology we pair a limited sensor package found on commonly available consumer wearables with statistics and machine learning to develop a fast and accurate seizure detector that willnotify both the wearer, and caregiver of any potentially dangerous seizures that occur. While current goals are focused on the detection of tonic clonic seizures, research is being performed into detection of other seizure types.

            </Col>
        </Row>
    </Container>

    </>
)
}
export default Epiwatch;

