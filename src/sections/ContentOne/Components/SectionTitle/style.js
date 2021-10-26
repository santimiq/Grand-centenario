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

  &::before {
    display: inline-block;
    content: "";
    border-top: 0.1rem solid #306095;
    width: 3rem;
    margin: 0.2rem 1rem;
  }
`
SectionTitle.Main = styled(Heading)`
  font-size: 40px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.38095;
  color: #306095;
  font-family: "Campton-SemiBold";
  padding: 16px 0;

  @media (min-width: 768px) {
    font-size: 33px;
  }
  @media (min-width: 992px) {
    font-size: 40px;
  }
`
export default SectionTitle
