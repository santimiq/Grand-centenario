import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const PortfolioDetails = styled(Box)`
  padding-top: 60px;
  padding-bottom: 40px;
  background: linear-gradient(
    179.97deg,
    #306095 0.03%,
    rgba(48, 96, 149, 0.932292) 21.37%,
    rgba(48, 96, 149, 0) 97.7%
  );
  .btn-recorrido {
    margin: 50px 10px;
    padding: 8px 24px;
    font-size: 14px;
    color: #fff !important;
    box-shadow: 0 20px 20px rgb(0 0 0 / 0%);
    background-color: #306095;
    border-color: rgba(#306095, 70%);
    transition: 0.4s;
    border-radius: 500px;

    &:hover {
      box-shadow: 0 20px 20px rgb(0 46 109 / 30%);
      color: #306095 !important;
      background-color: #fff;
      border-color: #fff;
    }
  }

  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 30px;
  }
  @media (max-width: 568px) {
    padding-top: 30px;
    padding-bottom: 30px !important;
  }

  @media (min-width: 992px) {
    padding-top: 120px;
  }
  .row-change-mobile {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .deptos {
    background: white;
    border-radius: 15px !important;

    img {
      border-radius: 15px 15px 0 0;
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    h3 {
      color: #306095;
      font-size: 30px;
      padding-bottom: 12px;
      @media (max-width: 578px) {
        font-size: 24px;
      }
    }

    div {
      padding: 32px;
    }

    ul {
      list-style: none;
      padding: 0;
      text-indent: -23px;
      margin-left: 20px;
    }

    li {
      padding: 8px 0;
    }

    ul li:before {
      content: "✓";
      margin-right: 12px;
      color: #306095;
    }
  }
`
PortfolioDetails.Image = styled(Box)`
  img {
    border-radius: 10px;
  }
`
PortfolioDetails.ImageTwo = styled(Box)`
  img {
    border-radius: 10px;
  }
  @media (min-width: 992px) {
    margin-top: -200px;
  }
`
PortfolioDetails.Content = styled(Box)``

PortfolioDetails.Title = styled(Heading)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 54px;
  margin-bottom: 65px;
  color: #fff;
  font-family: "Campton-SemiBold";
  &::before {
    display: inline-block;
    content: "";
    border-top: 0.1rem solid #fff;
    width: 3rem;
    margin: 0.7rem 1rem;
  }

  @media (min-width: 768px) {
    font-size: 35px;
    margin-bottom: 35px;
  }

  @media (min-width: 992px) {
    font-size: 42px;
  }
  @media (max-width: 578px) {
    margin-bottom: 25px;
  }
`

PortfolioDetails.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 32px;
  margin-bottom: 20px;
  color: #fff !important;
  font-family: "Campton-SemiBold";
`
PortfolioDetails.List = styled(Box)`
  padding: 0;
  margin: 0;
  li {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 25px;
    position: relative;
    padding-left: 30px;
    margin-bottom: 20px;
    list-style: none;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #fff;
      border: 2px solid #002e6d;
    }

    span {
      color: #262729;
      margin-right: 15px;
    }
  }
  @media (max-width: 992px) {
    li {
      font-size: 16px;
    }
  }
`
PortfolioDetails.Lista = styled(Box)`
  padding: 0;
  margin: 0;
  li {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 25px;
    position: relative;
    /* padding-left: 15px; */
    margin-bottom: 5px;
    list-style: none;
    color: #262729 !important;

    &::before {
      content: "✔";
      color: #002e6d;
      padding-right: 10px;
      /* position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #fff;
      border: 2px solid red; */
    }

    span {
      color: #262729;
      margin-right: 15px;
    }
  }
  @media (max-width: 992px) {
    li {
      font-size: 14px;
    }
  @media (max-width: 578px) {
    li {
      font-size: 14px;
      display: inline-flex;
    }
  }
`

PortfolioDetails.MasonryWrapper = styled(Box)`
  .masonry-grid {
    display: flex;
    width: auto;
    margin-left: -15px;
    margin-right: -15px;
    a {
      display: block;
    }
    &.no-gutter {
      .masonry-grid_column {
        padding-left: 0px;
        & > div {
          margin-top: 0;
          margin-bottom: 0;
          a {
            display: block;
          }
        }
      }
    }
  }
  .masonry-grid_column {
    padding: 0 15px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .masonry-grid_column > div {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`
PortfolioDetails.MasonrySingle = styled(Box)`
  > div {
    border-radius: 10px;
    overflow: hidden;
    > img {
      width: 100%;
    }
  }
`

PortfolioDetails.Box = styled(Box)``

export default PortfolioDetails
