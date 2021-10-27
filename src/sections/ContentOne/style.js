import styled from "styled-components/macro"
import { Box, Heading, Paragraph } from "~styled"

const Container = styled(Box)`
  padding-top: 80px;
  padding-bottom: 36px;

  @media (max-width: 578px) {
    padding-top: 30px;
    padding-bottom: 55px;
  }
  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 55px;
  }

  @media (min-width: 992px) {
    padding-top: 110px;
    padding-bottom: 130px;
  }
  .grand-tower-text {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.77777;
    color: #6d6e71;
  }
  .portal-text {
    font-size: 12px;
    color: #6d6e71;
    padding-top: 16px;
    line-height: 1.77777;
    opacity: 0.5;
  }
`
Container.Image = styled(Box)`
  padding-bottom: 35px;
  @media (min-width: 992px) {
    padding-bottom: 0;
  }

  @media (min-width: 1200px) {
    margin-left: 60px;
  }

  .imagen {
    border-radius: 5px !important;
    box-shadow: 14px 14px 25px rgba(0, 0, 0, 0.3);
  }
`
Container.Box = styled(Box)``
export default Container
