import styled from "styled-components/macro"
import { Heading, Box, Paragraph } from "~styled"

const SectionTitle = styled(Box)``
SectionTitle.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
  color: #306095;
`
SectionTitle.Subtitle = styled(Heading)`
  color: #306095;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 28px;
  position: relative;
  display: inline-block;
`
SectionTitle.Main = styled(Heading)`
  font-size: 42px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.38095;
  color: #306095;
  font-family: "Campton-SemiBold";
  padding: 16px 0;
  &::before {
    display: inline-block;
    content: "";
    border-top: 0.1rem solid #306095;
    width: 3rem;
    margin: 0.7rem 1rem;
  }

  @media (max-width: 578px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 33px;
  }
  @media (min-width: 992px) {
    font-size: 40px;
  }
`
export default SectionTitle
