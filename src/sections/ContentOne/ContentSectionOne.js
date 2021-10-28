import React from "react"
import Content from "./style"
import SectionTitle from "./Components/SectionTitle"
import { StaticImage as Img } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"
import Fade from "react-reveal/Fade"

export default function ContentSectionOne() {
  return (
    <Content backgroundColor="#F3F4F6" id="proyecto">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-1">
            <Fade left>
              <Content.Box mb="65px">
                <SectionTitle
                  title="Proyecto"
                  text="Además de espacios funcionales y modernos al interior de los departamentos, nos hemos ocupado por diseñar áreas deportivas y de esparcimiento para que la familia realice las actividades de su preferencia en ambientes agradables, divertidos y seguros, lo que sin duda te dará una mejor calidad de vida."
                  subTitleProps={{ mb: "10px" }}
                  titleProps={{ mb: "10px", as: "h2" }}
                />
                <p mb="69px" className="grand-tower-text">
                  <b>Grand Tower Centenario</b> se ubica entre Periférico, a la
                  altura de Las Águilas, y a un paso del nuevo centro comercial
                  Portal Centenario*. Alrededor cuenta con varios parques y
                  reservas ecológicas y con todos los servicios e
                  infraestructura necesarios.
                </p>
                <p className="portal-text">
                  <hr />
                  *En Portal Centenario, marca registrada por Mexico Retail
                  Properties, se encuentran Walmart, Suburbia, Starbucks, Office
                  Depot, Coppel, Smart Fit, Acuática Nelson Vargas, Cinépolis y
                  otras 80 tiendas de tu interés.
                </p>
              </Content.Box>
            </Fade>
          </Col>
          <Col
            xs="12"
            className="col-xl-6 offset-xl-1 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-2"
          >
            <Fade right>
              <Content.Image data-aos="fade-left">
                <Img
                  className="w-100 imagen"
                  src="../../assets/image/proyecto/img1.jpg"
                  alt="content"
                  layout="fullWidth"
                  placeholder="blurred"
                />
              </Content.Image>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Content>
  )
}
