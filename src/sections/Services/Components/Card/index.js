import React from "react"
import { SuperTag } from "~components"
import Card from "./style"
import Image from "~image/logo/logo-grand.jpeg"
export default function ServicesCard({ title, text, to, ...rest }) {
  return (
    <Card itemCenter={true} {...rest}>
      <Card.Icon>
        <img src={Image} className="logo-grand" />
      </Card.Icon>
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Text>
        <SuperTag value={text} />
      </Card.Text>
    </Card>
  )
}
