import React from "react"
import Zoom from "react-reveal/Fade"
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
              <Zoom>
                <SectionTitle
                  title="¡Juega, descansa, trabaja, haz deporte, estudia y diviértete sin salir de casa!"
                  titleProps={{ mb: "33px" }}
                  subTitleProps={{ mb: "20px" }}
                />
              </Zoom>
            </Team.Box>
            <p className="text-center">
              Disfruta con los amigos y la familia de estas increíbles
              amenidades, cuyo diseño se inspiró en las actividades y forma de
              vida que más te gustan. Todos encontrarán su espacio favorito.
            </p>
          </Col>
        </Row>
      </Container>
    </Team>
  )
}
