import React from "react"
import Form from "./style"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Fade from "react-reveal/Fade"

export default function ContactForm({ ...rest }) {
  return (
    <Form {...rest}>
      <div id="contacto"></div>
      <Row>
        <Col className="col-xl-8 col-lg-8 col-md-6 col-xs-12">
          <Fade left>
            <p className="form-whatsapp">¿Tienes alguna duda?</p>
            <h3 className="form-title">Escríbenos</h3>
            <div className="contact-form">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                onSubmit="submit"
                action="/mail"
                data-netlify-honeypot="bot-field"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="row">
                  <div className="col-lg-4 mb-4">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Your Website"
                        id="floatinginput3"
                        name="nombre"
                        type="text"
                      />
                      <label htmlFor="floatinginput3">Nombre</label>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder=""
                        id="floatinginput"
                        name="email"
                        type="email"
                      />
                      <label htmlFor="floatinginput">Correo Electrónico*</label>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatinginput2"
                        name="teléfono"
                        type="number"
                      />
                      <label htmlFor="floatinginput2">Teléfono</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        style={{ height: 100 }}
                        defaultValue={""}
                        name="mensaje"
                        type="text"
                      />
                      <label htmlFor="floatingTextarea">
                        ¿Tienes alguna pregunta?{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row align-items-center mt-3 flex-column">
                      <div className="col-md-4 col-lg-5 col-xl-4 text-center   pt-3">
                        <button
                          type="submit"
                          className="btn btn--lg-2 shadow--torch-red-3 rounded-55 boton-enviar"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Fade>
        </Col>
        <Col
          xs="12"
          className="col-xl-4 col-lg-4 col-md-6 col-xs-12 margen-up"
          data-aos="fade-left"
        >
          <Fade right>
            <div className="contactanos">
              <h3>Contáctanos</h3>
              <p>Para nosotros es muy importante tu opinión, escríbenos.</p>
              <hr></hr>
              <div className="costado">
                <i class="fas fa-map-marker-alt mapa"></i>
                <div>
                  <h6>Visitanos en:</h6>
                  <p>
                    Prol. 5 de Mayo 3121 Col Ex-Hacienda de Tarango, Álvaro
                    Obregón, CDMX
                  </p>
                </div>
              </div>
              <div className="costado">
                <i class="fas fa-phone-alt"></i>
                <div>
                  <h6>Nuestros teléfonos:</h6> 
                  <a href="tel:5554068105">55 · 5406 8105</a>
                  <br />
                  <a href="tel:5554068958">55 · 5406 8958</a>
                </div>
              </div>
            </div>
          </Fade>
        </Col>
      </Row>
    </Form>
  )
}
