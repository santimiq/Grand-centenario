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
import hoja11 from "~image/depto-proto/102.jpeg"
import hoja12 from "~image/depto-proto/403.jpeg"
import hoja13 from "~image/depto-proto/407.jpeg"
import hoja14 from "~image/depto-proto/504.jpeg"
import hoja15 from "~image/depto-proto/602.jpeg"
import hoja16 from "~image/depto-proto/1106.jpeg"
import hoja17 from "~image/depto-proto/N.jpeg"
import hoja18 from "~image/depto-proto/P.jpeg"
import hoja19 from "~image/depto-proto/Q.jpeg"

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
                <Tab>
                  <span className="titulo">Prototipo N</span> <br />{" "}
                  <span className="descripcion">
                    62.35m² + 12.65m² de balcón
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo P</span> <br />{" "}
                  <span className="descripcion">
                    80.50m² + 15.75m² de balcón
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">Prototipo Q</span> <br />{" "}
                  <span className="descripcion">
                    74.80m² + 22.50m² de balcón
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
              <TabPanel>
                <ModalImage
                  small={hoja17}
                  large={hoja17}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja18}
                  large={hoja18}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja19}
                  large={hoja10}
                  className="borde-modal"
                />
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </div>
      {/* <div className="apagar-lg">
        <Row className="align-items-center justify-content-center">
          <Col xs="10" className="col-xl-10 col-lg-6 col-md-10 col-xs-10">
            <Feature.Box>
              <h3 className="torre park text-center entrega" id="entrega">
                ENTREGA INMEDIATA
              </h3>
            </Feature.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="10" className="col-xl-10 col-xs-10 col-md-10">
            <Tabs className="text-center ">
              <TabList className=" justify-content-center">
                <Tab>
                  <span className="titulo">Dpto 102</span> <br />{" "}
                  <span className="descripcion">
                    64.60m² + 4.21m² de balcón
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">Dpto 403</span> <br />{" "}
                  <span className="descripcion">
                    69.20m² + 5.18m² de balcón
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">Dpto 407</span> <br />{" "}
                  <span className="descripcion">75.71m² de balcón</span>
                </Tab>
                <Tab>
                  <span className="titulo">Dpto 504</span> <br />{" "}
                  <span className="descripcion">
                    71.50m² + 5.18m² de balcón
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">Dpto 602</span> <br />{" "}
                  <span className="descripcion">
                    45.40m² + 5.01m² de balcón
                  </span>
                </Tab>
                <Tab>
                  <span className="titulo">Dpto 1106</span> <br />{" "}
                  <span className="descripcion">
                    75.30m² + 4.86m² de balcón
                  </span>
                </Tab>
              </TabList>

              <TabPanel>
                <ModalImage
                  small={hoja11}
                  large={hoja11}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja12}
                  large={hoja12}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja13}
                  large={hoja13}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja14}
                  large={hoja14}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja15}
                  large={hoja15}
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja16}
                  large={hoja16}
                  className="borde-modal"
                />
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </div> */}
    </Feature>
  )
}
