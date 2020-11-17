import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LabPhoto from '../Pictures/LabPhotos/LabPhoto_2018_2.jpg'
const ContactUs = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Lab Address</h3>
          {/* <p>Meyer Building, Room 2-161<br>
					600 N. Wolfe Street<br>
					Baltimore, MD 21287<br>
				</p> */}

          <h3>Contact Info</h3>
          <p>
            Email:{" "}
            <a href="mailto:croneecoglab@gmail.com">croneecoglab@gmail.com</a>
          </p>

          <h3>Youtube channel</h3>
          <a href="https://www.youtube.com/channel/UCevJ45cwkk0yrDd6ol6HbKg">
            {" "}
            Check out some cool videos on our work!
          </a>
        </Col>
        <Col>
          <Image src={LabPhoto} fluid style={{"padding-bottom":"15px"}}></Image>
        </Col>
      </Row>
      <div class="alert alert-info">
        <p>
          For information about Dr. Crone's clinical practice, please visit{" "}
          <a href="http://www.hopkinsmedicine.org/profiles/results/directory/profile/0006037/nathan-crone">
            his page at Johns Hopkins Medicine
          </a>
          .
        </p>
      </div>
      <hr />
      <div class="footer">
        <p>&copy; 2019, Johns Hopkins University</p>
      </div>{" "}
    </Container>
  );
};

export default ContactUs;
