import React from "react";
import Speech_BMI from "../../Pictures/Research/SpeechBMI.png";
import { Container, Image } from "react-bootstrap";

const SpeechBMI = () => {
  return (
    <>
      <Container>
        <h3 style={{ textAlign: "center" }}> Speech BMI </h3>
        <hr />
        <Image
          src={Speech_BMI}
          fluid
          style={{
            "maxWidth": "45%",
            display: "inline",
            float: "left",
            paddingLeft: "10px",
          }}
        ></Image>
        <p>
          A speech brain-computer interface (BCI) is a computational system that
          takes input signal from the brain and producing output in the form of
          textual or auditory speech. Such system could provide a novel junction
          between human and computer interactions. We are investigating the use
          of speech BCIs for several populations in need of speech decoding,
          assistive speech, and alternative and augmentative communications
          technologies and strategies, especially patients with locked-in
          syndrome (LIS). As these patients remain full cognitive functions,
          their means of communication are limited, if not non-existent. Our lab
          is interested in better understanding the representation of speech in
          brain signals, and in developing applying neuroscience knowledge of
          speech production to speech BCI engineering. Traditional speech BCI
          systems attempt to decode and classify neural activity into textual
          information using trained machine learning algorithms such as Bayesian
          updating. Emerging interest has been placed on mapping neural activity
          directly onto acoustic representations. Our lab has been focusing on
          developing decoding and synthesis strategies based on deep learning.
          Such strategy allows us to decode neural signals (ECoG signals)
          directly into speech representation, which can be used to reconstruct
          speech waveform. The basic function of a synthesis-based speech BCI is
          to directly translate neural signals into intelligible speech. The
          operation of a typical synthesis-based speech BCI is comprised of four
          stages: recording of the neural signal, extraction of features from
          the neural signal, decoding of the neural signal and synthesis of
          audio. We are also investigating the deployment of speech BCI system
          in real-life scenarios. Our lab is developing RTCOG, an online speech
          BCI platform and PyRTSP, a real-time signal processing pipeline for
          neural activity decoding.
        </p>
        <iframe
          title="SpeechVid"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/O0p0zV2pOvA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </>
  );
};

export default SpeechBMI;

//
