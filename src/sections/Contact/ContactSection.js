import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ContactForm from "./Components/ContactForm"
import ContactMap from "./Components/Map"
import Contact from "./style"

export default function ContactSction({ ...rest }) {
  return (
    <Contact {...rest}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs="10" className="col-xl-12 col-md-10">
            <Contact.Box mb="45" mbMD="3.135rem" mbLG="20px">
              <Contact.Title as="h2" pb="20px">
                Nuestra Ubicación
              </Contact.Title>
            </Contact.Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.3316961264054!2d-99.22502146068432!3d19.362660577590574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2005cb66eea79%3A0x98fc68f8a57f8f71!2sProl.%205%20de%20Mayo%203121%2C%20La%20Nacional%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001610%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1634841513586!5m2!1sen!2smx"
              loading="lazy"
              className="col-12 rounded"
              height="550px"
            ></iframe>
          </Col>
          <Col xs="10" className="col-lg-12 col-xl-12 mb-7 mb-lg-0 col-md-10">
            <ContactForm className="text-start" mt="50px" />
          </Col>
        </Row>
      </Container>
    </Contact>
  )
}
