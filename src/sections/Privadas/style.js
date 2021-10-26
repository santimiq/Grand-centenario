import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"
import { transparentize, rgba } from "polished"
const Content = styled(Box)``
Content.InnerWrapper = styled(Box)`
  border-top: 1px solid #dee2e6 !important;
  padding-top: 60px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }

  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 110px;
  }
`
Content.WidgetsWrapper = styled(Box)`
  background: #306095;
  border-radius: 5px;
  padding: 30px;
  li {
    color: #fff;
    font-size: 14px;
  }
`
Content.Widget = styled(Box)``
Content.WidgetTitle = styled(Heading)`
  font-size: 21px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 30px;
  color: #fff;
  margin-bottom: 13px;
`
Content.WidgetText = styled(Paragraph)`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  color: #fff;
  @media (min-width: 1600px) {
    font-size: 16px;
  }
`

Content.Image = styled(Box)`
  @media (min-width: 1400px) {
    padding: 0 55px;
  }
  img {
    border-radius: 5px;
    box-shadow: 14px 14px 25px rgba(0, 0, 0, 0.4);
  }
`

Content.Button = styled(Button)`
  min-width: 183px;
  height: 56px;
  border-radius: 5px;
  font-size: 15px;
  background: ${props => props.background};
  box-shadow: ${props =>
    props.background ? "-12px 12px 50px " + rgba(props.background, 0) : "none"};
  border-radius: 500px;
  color: #fff;
  transition: 0.4s;
  &:hover {
    background: ${props => props.background};
    box-shadow: ${props =>
      props.background
        ? "-12px 12px 50px " + rgba(props.background, 0.3)
        : "none"};
    color: #fff;
  }
`
Content.Box = styled(Box)``

export default Content
