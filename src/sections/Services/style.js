import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Service = styled(Box)`
  background-color: #f4f5f6;
  padding-top: 55px;
  padding-bottom: 36px;
  @media (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 55px;
  }

  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 110px;
  }
`

Service.Box = styled(Box)``

export default Service
