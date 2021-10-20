import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Video from "~components/VideoModal"
import { Images } from "~data"
import Hero from "./style"

export default function HeroSection() {
  return (
    <Hero style={{ backgroundImage: `url(${Images.bannerImagen.bannerImg})` }}>
      <Container>
        <Row className="justify-content-start">
          <Col className="col-xl-9">
            <Hero.Content className="text-left">
              <Hero.Title as="h1" fontColor="#fff">
                Un lugar para disfrutar
                <br /> estar en casa
              </Hero.Title>
              <Hero.Text fontColor="#fff">
                Único proyecto en la zona de Ex Hacienda de Tarango,
                <br /> diseñado bajo el concepto Residential & Amenities.
              </Hero.Text>
            </Hero.Content>
          </Col>
        </Row>
      </Container>
    </Hero>
  )
}