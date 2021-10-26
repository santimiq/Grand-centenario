import React from "react"
import { Container, Col, Row } from "react-bootstrap"

import Feature from "./style"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import hoja1 from "~image/depto-proto/hojas-1.600.jpg"
import hoja2 from "~image/depto-proto/hojas-2.600.jpg"
import hoja3 from "~image/depto-proto/hojas-3.600.jpg"
import hoja4 from "~image/depto-proto/hojas-4.600.jpg"
import hoja6 from "~image/depto-proto/hojas-6.600.jpg"
import hoja8 from "~image/depto-proto/hojas-8.600.jpg"
import hoja10 from "~image/depto-proto/hojas-10.600.jpg"

import ModalImage from "react-modal-image"
import "react-tabs/style/react-tabs.css"
export default function FeatureSection() {
  return (
    <Feature background="#fff">
      <div className="apagar-lg">
        <Row className="align-items-center justify-content-center">
          <Col xs="10" className="col-xl-10 col-lg-6 col-md-10 col-xs-10">
            <Feature.Box>
              <Feature.TitleThree as="">Prototipos</Feature.TitleThree>
            </Feature.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="10" className="col-xl-10 col-xs-10 col-md-10">
            <Tabs className="text-center">
              <TabList>
                <Tab>
                  <span className="titulo">95 m2 + 17.5 m2 de balcón</span>{" "}
                  <br />{" "}
                  <span className="descripcion">
                    3 Recámaras + 2 Baños + 2 Estacionamientos
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">91.5 m2 + 17.8 m2 de balcón</span>{" "}
                  <br />{" "}
                  <span className="descripcion">
                    3 Recámaras + 2 Baños + 2 Estacionamientos{" "}
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">80 m2 + 14.7 m2 de balcón</span>{" "}
                  <br />{" "}
                  <span className="descripcion">
                    2 Recámaras + 2 Baños + 1 o 2 Estacionamientos
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">76.4 m2 + 14.9 m2 de balcón</span>{" "}
                  <br />{" "}
                  <span className="descripcion">
                    2 Recámaras + 2 Baños + 1 o 2 Estacionamientos
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo"> 67.9 m2 `12.5 m2 de balcón</span>{" "}
                  <br />{" "}
                  <span className="descripcion">
                    2 Recámaras + 2 Baños + 1 o 2 Estacionamientos
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">63.3 m2 + 12.3 m2</span> <br />
                  <span className="descripcion">
                    {" "}
                    2 Recámaras + 2 Baños + 1 Estacionamiento
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">51.7 m2 + 12.3 m2 de balcón</span>{" "}
                  <br />{" "}
                  <span className="descripcion">
                    1 Recámara + 1 Baño + 1 Estacionamiento
                  </span>
                </Tab>
              </TabList>

              <TabPanel>
                <ModalImage
                  small={hoja2}
                  large={hoja2}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja4}
                  large={hoja4}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja10}
                  large={hoja10}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja6}
                  large={hoja6}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja3}
                  large={hoja3}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja1}
                  large={hoja1}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja8}
                  large={hoja8}
                  className="borde-modal"
                />
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </div>
    </Feature>
  )
}
