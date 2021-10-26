import React from "react"
import { Container, Col, Row } from "react-bootstrap"

import Feature from "./style"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import hoja1 from "~image/depto-proto/hojas-1.600.jpg"
import hoja2 from "~image/depto-proto/hojas-2.600.jpg"
import hoja3 from "~image/depto-proto/hojas-3.600.jpg"
import hoja4 from "~image/depto-proto/hojas-4.600.jpg"
import hoja5 from "~image/depto-proto/hojas-5.600.jpg"
import hoja6 from "~image/depto-proto/hojas-6.600.jpg"
import hoja7 from "~image/depto-proto/hojas-7.600.jpg"

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
                  <span className="titulo">Prototipo A</span> <br />{" "}
                  <span className="descripcion">95 m2 + 17.5 m2 de balcón</span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo B</span> <br />{" "}
                  <span className="descripcion">
                    91.5 m2 + 17.8 m2 de balcón
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo C</span> <br />{" "}
                  <span className="descripcion">80 m2 + 14.7 m2 de balcón</span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo D</span> <br />{" "}
                  <span className="descripcion">
                    76.4 m2 + 14.9 m2 de balcón
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo E </span> <br />{" "}
                  <span className="descripcion">
                    67.9 m2 + 12.5 m2 de balcón
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo F</span> <br />{" "}
                  <span className="descripcion">63.3 m2 + 12.3 m2</span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo G</span> <br />{" "}
                  <span className="descripcion">
                    51.7 m2 + 12.3 m2 de balcón
                  </span>
                </Tab>
              </TabList>

              <TabPanel>
                <ModalImage
                  small={hoja1}
                  large={hoja1}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja2}
                  large={hoja2}
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
                  small={hoja4}
                  large={hoja4}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja5}
                  large={hoja5}
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
                  small={hoja7}
                  large={hoja7}
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
