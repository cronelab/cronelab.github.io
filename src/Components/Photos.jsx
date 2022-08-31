import React from 'react';
import { Container, Image, Carousel } from 'react-bootstrap';
import Brno from '../Pictures/Other/2018_Brno_Feremi_Arya.jpg';
import ICCN from '../Pictures/Other/2018_ICCN_Crone_Matsumoto_Duffau_Kyoto.jpg';
import SFN from '../Pictures/Other/2018_SFN.jpg';
import BiotechSymp from '../Pictures/Other/BiotechSymposium.jpg';
import labphoto2016 from '../Pictures/LabPhotos/LabPhoto_2016.png';

function Photos() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <Image src={ICCN} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Brno} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={SFN} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={BiotechSymp} />
        </Carousel.Item>

        <Carousel.Item>
          <Image src={labphoto2016} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
export default Photos;
