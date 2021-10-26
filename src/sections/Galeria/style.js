import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const PortfolioDetails = styled(Box)`
  /* padding: 45px 0;

  @media (min-width: 768px) {
    padding: 40px 0;
  }

  @media (min-width: 992px) {
    padding: 80px 0 30px 0;
  }
  @media (max-width: 578px) {
    padding: 45px 0 30px 0;
  } */
`
PortfolioDetails.Image = styled(Box)`
  img {
    border-radius: 10px;
  }
`
PortfolioDetails.Content = styled(Box)``

PortfolioDetails.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 54px;
  margin-bottom: 25px;
  color: #002e6d;
  font-family: "Campton-SemiBold";

  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 992px) {
    font-size: 42px;
  }
`

PortfolioDetails.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 32px;
  margin-bottom: 20px;
  margin-right: 10px;
  color: #a3a5a8;
  font-family: "Campton-SemiBold";
`

PortfolioDetails.Box = styled(Box)``
PortfolioDetails.SliderWrapper = styled(Box)`
  .slick-list  {
    margin: 0 -12px;
    padding: 0 180px !important;
    @media (min-width: 992px) {
      width: 150%;
    }
    @media (max-width: 578px) {
      padding: 0 50px !important;

    }
  }
  .slick-slide {
    padding: 0 12px;
    
    &:focus {
      outline: none !important;
      box-shadow: none;
    }

  }
  .single-slide {
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
    }
    &:focus {
      outline: none !important;
      box-shadow: none;
    }
    &:focus-visible {
      outline: none !important;
      box-shadow: none;
    }
  }

  .slick-dots {
    list-style: none;
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    margin-top: 50px;
    li {
      display: flex;
      button {
        border: none;
        color: transparent;
        width: 22px;
        height: 5px;
        border-radius: 3px;
        background-color: #828288;
        margin: 0 5px;
        transition: 0.4s ease-in-out;
        &:focus {
          outline: none;
        }
      }
      &.slick-active {
        button {
          background-color: #306095;
        }
      }
    }
`
PortfolioDetails.Slide = styled(Box).attrs({ className: "single-slide" })``

export default PortfolioDetails
