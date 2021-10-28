import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import SimpleReactLightbox from "simple-react-lightbox"
import { PageWrapper } from "~components"
import Banner from "~sections/Hero"
import Departamentos from "~sections/Departamentos"
import Prototipos from "~sections/PrototiposDepto"
import Galeria from "~sections/Galeria"
import Contacto from "~sections/Contact"
import Footer from "~sections/FooterOne"
import ContentOne from "~sections/ContentOne"
import Team from "~sections/Team"
import Juega from "~sections/Juega"
import Services from "~sections/Services"
import OfPrivadas from "~sections/Privadas"

const header = {
  headerClasses:
    "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid: false,
}

export default function Marketing() {
  AOS.init()
  return (
    <PageWrapper headerConfig={header}>
      <Banner />
      <ContentOne />
      <Departamentos />
      <Prototipos />
      <Team />
      <SimpleReactLightbox>
        <Galeria />
      </SimpleReactLightbox>
      <Juega />
      <Services />
      <OfPrivadas />
      <Contacto />
      <Footer />
    </PageWrapper>
  )
}
