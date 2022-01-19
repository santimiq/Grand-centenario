import React from "react"
import Zoom from "react-reveal/Zoom"
import ServicesCard from "./Components/Card"
import Service from "./style"
import SectionTitle from "./Components/SectionTitle"
import { Col, Container, Row } from "react-bootstrap"
export default function ServicesSection() {
  return (
    <Service>
      <Container className="container">
        <Row className="row justify-content-center">
          {/* Single Services */}

          <Col xs="6" className="col-xl-4 col-lg-4 col-md-6 col-xs-6 mt-5">
            <Zoom>
              <ServicesCard
                data-aos="zoom-in"
                title="Torre Centenario"
                icon="fas fa-building"
                iconColor="#306095"
                text="Salón de fiestas <br/>Salón inglés<br/>2 Salones lounge<br/>Cine"
              />
            </Zoom>
          </Col>
          {/*/ .Single Services */}
          <Col xs="6" className="col-xl-4 col-lg-4 col-md-6 col-xs-6 mt-5">
            <Zoom>
              <ServicesCard
                data-aos="zoom-in"
                title="Torre Park"
                icon="fas fa-building"
                iconColor="#306095"
                text="Gym <br/>Spinning<br/>CrossFit<br/>Vapor/Sauna <br/>Alberca semiolímpica <br/> Alberca infantil"
              />
            </Zoom>
          </Col>
          {/*/ .Single Services */}
          {/*/ .Single Services */}
          <Col xs="6" className="col-xl-4 col-lg-4 col-md-6 col-xs-6 mt-5">
            <Zoom>
              <ServicesCard
                data-aos="zoom-in"
                title="Sky Park"
                icon="fas fa-building"
                iconColor="#306095"
                text="Asadores <br/> Fogateros<br/>Sky lounge"
              />
            </Zoom>
          </Col>
          {/*/ .Single Services */}
          {/* Single Services */}
          <Col xs="6" className="col-xl-4 col-lg-4 col-md-6 col-xs-6 mt-5">
            <Zoom>
              <ServicesCard
                data-aos="zoom-in"
                title="Torre Lago"
                icon="fas fa-building"
                iconColor="#306095"
                text="Lobby principal <br/>Estudios privados<br/>Snack"
              />
            </Zoom>
          </Col>
          <Col xs="6" className="col-xl-4 col-lg-4 col-md-6 col-xs-6 mt-5">
            <Zoom>
              <ServicesCard
                data-aos="zoom-in"
                title="Exteriores"
                icon="fas fa-building"
                iconColor="#306095"
                text="Lago y cascada <br/>4,120m² de jardines<br/>Paddle / Tennis <br/>Garden gym<br/>Juegos infantiles <br/>Basket 21 <br/>Área de mascotas <br/>Circuito infantil <br/>Golfito"
              />
            </Zoom>
          </Col>
          <Col xs="6" className="col-xl-4 col-lg-4 col-md-6 col-xs-6 mt-5">
            <Zoom>
              <ServicesCard
                data-aos="zoom-in"
                title="Torre City"
                icon="fas fa-building"
                iconColor="#306095"
                text="Boliche <br/>Arcade<br/>Kids club<br/>Salón de juegos <br/>Salón de estudio"
              />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </Service>
  )
}
