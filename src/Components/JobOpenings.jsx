import React from 'react';
// import {
//   Container,

//   ListGroup,
//   ListGroupItem,
// } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.css';

function JobOpenings() {
  return (
    <Container style={{ marginLeft: 0 }}>
      {/* <ListGroup>
        <p><b>Month, Year</b></p>
        <p><b>Positino</b></p>
        <ListGroupItem>
          This is a sample job description
          {' '}
          <a href="mailto: ncrone@jhmi.edu">ncrone@jhmi.edu</a>
          ,
          including a cover letter describing research experience and
          qualifications, academic CV, and contact information for references.
        </ListGroupItem>
      </ListGroup> */}
      <p style={{ paddingTop: 20, paddingBottom: 10 }}>
        <b>Unfortunately we have no job openings available at the moment.</b>
      </p>
    </Container>
  );
}

export default JobOpenings;
