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
import hoja8 from "~image/depto-proto/K.jpg"
import hoja9 from "~image/depto-proto/L.jpg"
import hoja10 from "~image/depto-proto/M.jpg"

import ModalImage from "react-modal-image"
import "react-tabs/style/react-tabs.css"
export default function FeatureSection() {
  return (
    <Feature background="#fff">
      <div className="apagar-lg">
        <Row className="align-items-center justify-content-center">
          <Col xs="10" className="col-xl-10 col-lg-6 col-md-10 col-xs-10">
            <Feature.Box>
              <Feature.TitleThree as="">
                Departamentos Prototipos
              </Feature.TitleThree>
              <h3 className="torre text-center">Torre Centenario</h3>
            </Feature.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="10" className="col-xl-10 col-xs-10 col-md-10">
            <Tabs className="text-center">
              <TabList>
                <Tab>
                  <span className="titulo">Prototipo A</span> <br />{" "}
                  <span className="descripcion">95m² + 17.5m² de balcón</span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo B</span> <br />{" "}
                  <span className="descripcion">91.5m² + 17.8m² de balcón</span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo C</span> <br />{" "}
                  <span className="descripcion">80m² + 14.7m² de balcón</span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo D</span> <br />{" "}
                  <span className="descripcion">76.4m² + 14.9m² de balcón</span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo E </span> <br />{" "}
                  <span className="descripcion">67.9m² + 12.5m² de balcón</span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo F</span> <br />{" "}
                  <span className="descripcion">63.3m² + 12.3m² de balcón</span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo G</span> <br />{" "}
                  <span className="descripcion">51.7m² + 12.3m² de balcón</span>
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
      <div className="apagar-lg">
        <Row className="align-items-center justify-content-center">
          <Col xs="10" className="col-xl-10 col-lg-6 col-md-10 col-xs-10">
            <Feature.Box>
              <h3 className="torre park text-center">Torre Park</h3>
            </Feature.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="10" className="col-xl-10 col-xs-10 col-md-10">
            <Tabs className="text-center ">
              <TabList className=" justify-content-center">
                <Tab>
                  <span className="titulo">Prototipo K</span> <br />{" "}
                  <span className="descripcion">
                    90.50m² + 17.70m² de balcón
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo L</span> <br />{" "}
                  <span className="descripcion">
                    70.90m² + 13.80m² de balcón
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo M</span> <br />{" "}
                  <span className="descripcion">
                    64.80m² + 12.65m² de balcón
                  </span>
                </Tab>
              </TabList>

              <TabPanel>
                <ModalImage
                  small={hoja8}
                  large={hoja8}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja9}
                  large={hoja9}
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
            </Tabs>
          </Col>
        </Row>
      </div>
    </Feature>
  )
}
