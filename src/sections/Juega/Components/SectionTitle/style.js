import styled from "styled-components/macro"
import { Heading, Box, Paragraph } from "~styled"

const SectionTitle = styled(Box)``
SectionTitle.Text = styled(Paragraph)`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
  color: inherit;
`
SectionTitle.Subtitle = styled(Heading)`
  color: #6d6e71 !important;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 28px;
  position: relative;
  display: inline-block;
`
SectionTitle.Main = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.38095;
  color: #306095 !important;

  @media (min-width: 768px) {
    font-size: 33px;
  }

  @media (min-width: 1200px) {
    font-size: 38px;
  }
`
export default SectionTitle
