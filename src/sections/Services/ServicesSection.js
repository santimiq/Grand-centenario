import React from "react"
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
          <Col className="col-xl-4 col-lg-4 col-md-6 col-xs-8 mt-5">
            <ServicesCard
              title="Torre Centenario"
              icon="fas fa-building"
              iconColor="#306095"
              text="Salón de Fiestas <br/>Salón Inglés<br/>2 Salones Lounge<br/>Cine"
            />
          </Col>
          {/*/ .Single Services */}
          <Col xs="12" className="col-xl-4 col-lg-4 col-md-6 col-xs-8 mt-5">
            <ServicesCard
              title="Torre Park"
              icon="fas fa-building"
              iconColor="#306095"
              text="Gym <br/>Spinning<br/>CrossFit<br/>Vapor/Sauna <br/>Alberca Semiolímpica <br/> Alberca infantil"
            />
          </Col>
          {/*/ .Single Services */}
          {/*/ .Single Services */}
          <Col xs="12" className="col-xl-4 col-lg-4 col-md-6 col-xs-8 mt-5">
            <ServicesCard
              title="Torre City"
              icon="fas fa-building"
              iconColor="#306095"
              text="Boliche <br/>Arcade<br/>Kids Club<br/>Salón de juegos <br/>Salón de estudio"
            />
          </Col>
          {/*/ .Single Services */}
          {/* Single Services */}
          <Col xs="12" className="col-xl-4 col-lg-4 col-md-6 col-xs-8 mt-5">
            <ServicesCard
              title="Torre Lago"
              icon="fas fa-building"
              iconColor="#306095"
              text="Lobby principal <br/>Oficinas Privadas<br/>Snack"
            />
          </Col>
          <Col xs="12" className="col-xl-4 col-lg-4 col-md-6 col-xs-8 mt-5">
            <ServicesCard
              title="Exteriores"
              icon="fas fa-building"
              iconColor="#306095"
              text="Lago y cascada <br/>4,120 m2 de jardines<br/>Paddle / Tennis <br/>Garden Gym<br/>Juegos infantiles <br/>Basket 21 <br/>Área de mascotas <br/>Circuito infantil <br/>Golfito"
            />
          </Col>
          <Col xs="12" className="col-xl-4 col-lg-4 col-md-6 col-xs-8 mt-5">
            <ServicesCard
              title="Sky Park"
              icon="fas fa-chart-pie"
              iconColor="#306095"
              text="Asadores <br/> Fogateros<br/>Sky Lounge"
            />
          </Col>
        </Row>
      </Container>
    </Service>
  )
}
