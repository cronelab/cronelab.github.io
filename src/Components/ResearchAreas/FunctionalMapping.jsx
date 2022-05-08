import React from "react";
import { Image, Col, Row, Container } from "react-bootstrap";
import FMPic from "../../Pictures/Research/FunctionalMapping.png";
const FunctionalMapping = () => {
  return (
    <>
      <Container>
        <h3 style={{ textAlign: "center" }}> Functional Mapping </h3>
        <hr /> <h3>Functional Mapping</h3>
        <Row>
          <Col>
            <p>
              We are using event-related spectral analysis (ESA) of ECoG signals
              to study how the human brain implements language. So far we have
              focused on the neural substrates and processing dynamics of word
              production. In other words, we have been looking at which parts of
              the brain are activated, and when they are activated during simple
              tasks that require subjects to speak a word in response to a
              visual or auditory stimulus.
            </p>
          </Col>
          <Col>
            <Image src={FMPic} fluid></Image>
            <a href="http://www.webfm.io/" className="tab">
              <strong>Click here for a demo</strong>
            </a>
          </Col>
        </Row>
        <Row>
          <p className="tab">
            These stimuli may consist of written words, pictures of objects, or
            spoken words or parts of words. Although functional MRI and PET
            scanning can also provide a picture of which parts of the brain are
            activated by these tasks, it is very difficult for these techniques
            to discriminate the timing of brain activation on a scale that is
            consistent with task performance, i.e. hundreds of milliseconds.
            Like other electromagnetic measures of brain activation (e.g. evoked
            potentials), ESA has sufficient temporal resolution to allow us to
            study the timing of activation in different parts of the brain.
            Since different regions of the brain perform different functions, we
            can use ESA to study how different cortical regions/functions are
            called into play during word production.
          </p>
          <br />
          <br />
          <p className="tab">
            The immediate goal of this research is to provide more detailed
            brain maps of language in patients who are undergoing surgery for
            intractable epilepsy, vascular malformations, or brain tumors.
            Although certain areas of the brain (left perisylvian cortex) are
            usually responsible for language, the details of this mapping of
            language to the brain can differ significantly between individuals.
            This map is shaped by learning to speak and understand language
            during childhood and appears to be unique for each individual.
            Therefore, when brain surgery is going to be done near "eloquent"
            areas, it is often a good idea to map language before any brain
            tissue is removed. This can help the surgeon minimize the risk of
            surgical complications. In addition to this immediate and practical
            application of ESA to clinical practice, the long-range goal of our
            research is to gain a better understanding of how the brain normally
            produces language, and how brain diseases such as epilepsy, vascular
            malformations, and tumors, affect language.
          </p>
        </Row>
      </Container>
    </>
  );
};

export default FunctionalMapping;
