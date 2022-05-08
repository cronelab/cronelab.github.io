import React from 'react'
import logo from '../Pictures/crone-logo.png'
import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
const Navigation = () => {
  return (
    <>
      <Image src={logo}></Image>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="people">People</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="publications">Publications</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Research Areas" id="nav-dropdown">
              <NavDropdown.Item href="languageconnectivity" eventKey="4.1">
                Connectivity: Language
              </NavDropdown.Item>
              <NavDropdown.Item href="seizureconnectivity" eventKey="4.3">
                Connectivity: Seizure
              </NavDropdown.Item>
              <NavDropdown.Item href="motorbmi" eventKey="4.2">
                Brain Machine Interfaces: Motor
              </NavDropdown.Item>
              <NavDropdown.Item href="speechbmi" eventKey="4.2">
                Brain Machine Interfaces: Speech
              </NavDropdown.Item>
              <NavDropdown.Item href="functionalmapping" eventKey="4.3">
                Functional Mapping
              </NavDropdown.Item>
              <NavDropdown.Item href="spes" eventKey="4.3">
                Single Pulse Electrical Stimulation
              </NavDropdown.Item>
              <NavDropdown.Item href="epiwatch" eventKey="4.3">
                Epiwatch
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="photos">Photos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="contactus">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="jobs">Job Openings</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default Navigation
