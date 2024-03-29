import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Masonry from "react-masonry-css"
import PortfolioDetails from "./style"
import DeptoUno from "../../assets/image/departamentos/depto1.jpg"
import DeptoDos from "../../assets/image/departamentos/depto2.jpg"
import DeptoTres from "../../assets/image/departamentos/depto3.jpg"
import Zoom from "react-reveal/Zoom"
// import Portfolio from "src/sections/digital/Portfolio/style"

const breakpointColumnsObj = {
  default: 2,
  1200: 2,
  992: 2,
  768: 1,
  576: 1,
}
export default function PortfolioDetailsSection() {
  return (
    <PortfolioDetails background="#e5e5e5" id="departamentos">
      <Container>
        <Row className="text-center justify-content-center">
          <Col xs="10" className="">
            <PortfolioDetails.Title as="h2">
              Departamentos
            </PortfolioDetails.Title>
            <div className="group-recorrido">
              <a
                href="https://my.matterport.com/show/?m=QkZmhAt7tPq"
                target="_blank"
                className="btn-recorrido"
              >
                Recorrido Virtual Depto 1
              </a>
              <a
                href="https://my.matterport.com/show/?m=aXvvYDEUwP3"
                target="_blank"
                className="btn-recorrido"
              >
                Recorrido Virtual Depto 2
              </a>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs="10" className="col-xl-4 col-lg-4 col-md-10 col-xs-10 mb-5">
            <Zoom>
              <div className="deptos" data-aos="fade-up">
                <img src={DeptoUno} />
                <div>
                  <h3>Características</h3>
                  <ul>
                    <li>50 a 140m²</li>
                    <li>Todos con balcón</li>
                    <li>1, 2 y 3 recámaras</li>
                    <li>1, 2 o 3 baños</li>
                    <li>1 o 2 estacionamientos</li>
                    <li>Opción de Bodega</li>
                  </ul>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col xs="10" className="col-xl-4 col-lg-4 col-md-10 col-xs-10 mb-5">
            <Zoom>
              <div className="deptos" data-aos="fade-up">
                <img src={DeptoDos} />
                <div>
                  <h3>Acabados</h3>
                  <ul>
                    <li>
                      Pisos de porcelanato en sala-comedor, cocina y baños.
                    </li>
                    <li>Pisos de madera de ingeniería en recámaras.</li>
                    <li>Cocina integral con cubierta de granito.</li>
                    <li>Lavabo con cubierta de mármol en baño.</li>
                    <li>Lámparas led.</li>
                    <li>Closets con diseño moderno y funcional.</li>
                  </ul>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col xs="10" className="col-xl-4 col-lg-4 col-md-10 col-xs-10">
            <Zoom>
              <div className="deptos" data-aos="fade-up">
                <img src={DeptoTres} />
                <div>
                  <h3>Servicios</h3>
                  <ul>
                    <li>Estudios privados</li>
                    <li>Seguridad</li>
                    <li>Estacionamiento de visitas</li>
                    <li>Lavandería</li>
                    <li>Snack</li>
                    <li>Minisúper </li>
                  </ul>
                </div>
              </div>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </PortfolioDetails>
  )
}
