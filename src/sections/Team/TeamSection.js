import React from "react"

import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "./Components/SectionTitle"
import TeamCard from "./Components/Card"
import Team from "./style"
export default function TeamSection({ ...rest }) {
  return (
    <Team {...rest} backgroundColor="#f3f4f6" id="amenidades">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xxl-6 col-md-8 col-xs-10">
            <Team.Box className="text-center">
              <SectionTitle title="Amenidades" />
            </Team.Box>
          </Col>
        </Row>
      </Container>
    </Team>
  )
}
