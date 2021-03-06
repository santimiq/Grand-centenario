import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage as Img } from "gatsby-plugin-image"
import Content from "./style"
import SectionTitle from "./Components/SectionTitle"
import Fade from "react-reveal/Fade"

export default function ContentSectionOne() {
  return (
    <Content id="oficinas">
      <Container>
        <Content.InnerWrapper>
          <Row className="align-items-center justify-content-center">
            <Col
              xs="12"
              className="col-lg-4 col-md-8 col-xs-11 text-center text-lg-start"
            >
              <Fade left>
                {/* Section Title */}
                <SectionTitle
                  title="Estudios Privados"
                  text="¿Necesitas un espacio para trabajar que no esté dentro de tu propia casa, pero al que llegues caminando en dos minutos?"
                  titleProps={{ mb: "30px" }}
                  subTitleProps={{ mb: "25px" }}
                />
                <p>
                  En Grand Tower Centenario ofrecemos estudios privados para
                  quienes como tú desean la comodidad y el privilegio de vivir y
                  trabajar en el mismo lugar y les interesa contar con un área
                  propia para desarrollarse y crecer de manera profesional.
                </p>
              </Fade>
            </Col>
            <Col xs="12" className="col-xl-5 col-lg-4 col-md-6 col-xs-9 ">
              <Fade right>
                <Content.Image mt="30px" mb="30px" mbMD="0" mtMD="0">
                  <Img
                    src="../../assets/image/home-agency/oficina1.jpg"
                    alt="content"
                    layout="fullWidth"
                    placeholder="blurred"
                  />
                </Content.Image>
              </Fade>
            </Col>
            <Col
              xs="12"
              className="col-xl-3 col-lg-4 col-md-6 col-xs-10 order-3  "
            >
              <Fade right>
                <Content.WidgetsWrapper
                // mb="-10px"
                // mtMD="40px"
                // mtLG="0"
                // mrXS="70px"
                // mrMD="30px"
                // mrLG="0"
                >
                  {/* Single Services */}
                  <Content.Widget pb="10px">
                    <Content.WidgetTitle>
                      Características de las oficinas
                    </Content.WidgetTitle>
                    <Content.WidgetText>
                      Desde 7.50m²
                      <br /> Hasta 14.40m²
                    </Content.WidgetText>
                    <ul>
                      <li>Acceso controlado</li>
                      <li>Seguridad</li>
                      <li>Sala de juntas</li>
                      <li>Centro de paquetería</li>
                      <li>Snack</li>
                      <li>Baños</li>
                    </ul>
                  </Content.Widget>
                </Content.WidgetsWrapper>
              </Fade>
            </Col>
          </Row>
        </Content.InnerWrapper>
      </Container>
    </Content>
  )
}
