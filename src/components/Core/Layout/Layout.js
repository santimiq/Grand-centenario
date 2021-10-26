import React from "react"
import { Helmet } from "react-helmet"
import favicon from "~image/favicon.png"
import Header from "../Header"
export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Grand Tower Centenario</title>
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <Header />
      {children}
    </>
  )
}
