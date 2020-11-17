import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import Brno from "../Pictures/Other/2018_Brno_Feremi_Arya.jpg";
import ICCN from "../Pictures/Other/2018_ICCN_Crone_Matsumoto_Duffau_Kyoto.jpg";
import SFN from "../Pictures/Other/2018_SFN.jpg";
import BiotechSymp from "../Pictures/Other/BiotechSymposium.jpg";
import labphoto2016 from '../Pictures/LabPhotos/LabPhoto_2016.png'
const Photos = () => {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <Image src={ICCN}></Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={Brno}></Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={SFN}></Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={BiotechSymp}></Image>
          </Carousel.Item>

          <Carousel.Item>
            <Image src={labphoto2016}></Image>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};
export default Photos;
