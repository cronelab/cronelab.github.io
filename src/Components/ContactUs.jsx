import React from 'react';
import {
  Container, Row, Col, Image, Button,
} from 'react-bootstrap';
import LabPhoto from '../Pictures/LabPhotos/LabPhoto_2018_2.jpg';
import 'font-awesome/css/font-awesome.css';

function ContactUs() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Lab Address</h3>
          <p>
            Meyer Building, Room 2-161
            <br />
            600 N. Wolfe Street
            <br />
            Baltimore, MD 21287
            <br />
          </p>

          <h3>Contact Info</h3>
          <p>
            Email:
            {' '}
            <a href="mailto:croneecoglab@gmail.com">croneecoglab@gmail.com</a>
          </p>

          <Button onClick={() => (window.location.href = 'https://www.youtube.com/channel/UCevJ45cwkk0yrDd6ol6HbKg')}>
            <i style={{ fontSize: '48px', color: 'red' }} className="fa fa-youtube-play" />
          </Button>

          <Button onClick={() => (window.location.href = 'https://github.com/cronelab')}>
            <i style={{ fontSize: '48px' }} className="fa fa-github" />
          </Button>
        </Col>
        <Col>
          <Image src={LabPhoto} fluid style={{ paddingBottom: '15px' }} />
        </Col>
      </Row>
      <div className="alert alert-info">
        <p>
          For information about Dr. Crone's clinical practice, please visit
          {' '}
          <a href="http://www.hopkinsmedicine.org/profiles/results/directory/profile/0006037/nathan-crone">
            his page at Johns Hopkins Medicine
          </a>
          .
        </p>
      </div>
    </Container>
  );
}

export default ContactUs;
