import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Hero = styled(Box)`
  padding-top: 125px;
  padding-bottom: 60px;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 998;
  @media (min-width: 768px) {
    padding-top: 145px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    height: 100vh;
    padding-top: 40vh;
    padding-bottom: 80px;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(
      90deg,
      rgba(36, 73, 110, 0.912778) -44.44%,
      rgba(24, 50, 72, 0.7) 24.16%,
      rgba(8, 18, 19, 0.2) 98.72%
    );
    opacity: 0.7;
    position: absolute;
    z-index: -1;
  }
`

Hero.Content = styled(Box)``
Hero.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400 !important;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.619;
  margin-bottom: 28px;
  opacity: 1;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 992px) {
    font-size: 21px;
  }
`
Hero.Title = styled(Heading)`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.2;
  margin-bottom: 10px;
  font-family: "Campton-SemiBold";

  @media (min-width: 480px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 992px) {
    font-size: 60px;
  }
`
Hero.Button = styled(Button)`
  min-width: 180px;
  height: 56px;
  font-size: 15px;
  color: #002e6d !important;
  box-shadow: 0 20px 20px rgb(0 0 0 / 0%);
  background-color: #fff;
  border-color: #fff;
  transition: 0.4s;
  border-radius: 500px;

  &:hover {
    box-shadow: 0 20px 20px rgb(0 46 109 / 30%);
    color: #fff !important;
    background-color: rgb(0, 46, 109);
    border-color: #002e6d;
  }
`

export default Hero
