import styled from "styled-components/macro"
import { Box } from "~styled"

const Form = styled(Box)`
  #contacto {
    padding-top: 130px;
  }
  @media (max-width: 578px) {
    .margen-up {
      padding-top: 16px;
    }
    #contacto {
      padding-top: 50px;
    }
  }
  .contactanos {
    background: #306095;
    color: #fff;
    border-radius: 10px;
    padding: 25px;
    padding-top: 40px;
    h3,
    h6 {
      color: #fff;
    }
    p {
      font-size: 14px;
    }

    .costado {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
    }
    i {
      font-size: 24px;
      margin-right: 60px;
      margin-left: 40px;
      color: #306095;
      background: white;
      border-radius: 50%;
      padding: 20px;
    }
    .mapa {
      padding: 20px 22px;
    }

    a {
      color: white;
      font-size: 14px;
      &:hover {
        opacity: 0.5;
      }
    }
  }

  .form-title {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 30px;
    margin-bottom: 8px;
    color: #306095;
  }
  .form-whatsapp {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 30px;
    margin-bottom: 28px;
    color: #262729;
    opacity: 0.7;
  }
  .boton-enviar {
    color: #306095 !important;
    background-color: #fff !important;
    border-radius: 50px;
    &:hover {
      color: #306095 !important;
      background-color: #d5d5d5 !important;
    }
  }
  .form-floating {
    label {
      padding-left: 25px;
      font-size: 15px;
      min-height: 45px;
      padding-top: 0;
      padding-bottom: 0;
      color: #262729;
      opacity: 0.7;
    }

    textarea {
      min-height: 175px;
      color: #262729;
      opacity: 0.7;

      & ~ label {
        margin-top: 20px;
      }
    }

    input {
      & ~ label {
        display: flex;
        align-items: center;
      }
    }
  }

  .form-control {
    background: transparent;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 15px;
    /* border: 1px solid #e5e5e5 !important; */
    background: #fff;
  }

  input.form-control {
    border-radius: 500px;
    background: #fff;
    color: #262729;
    opacity: 0.7;
    height: 45px !important;

    &::placeholder {
      color: transparent;
    }
  }

  textarea {
    min-height: 175px;
    border-radius: 15px;

    & ~ label {
    }
  }

  .form-check {
    input.form-check-input {
      min-width: 20px;
      min-height: 20px;
      max-width: 20px;
      max-height: 20px;
      border-radius: 3px;
      border: 0;

      &:checked[type="checkbox"] {
        background-color: #002e6d !important;
        box-shadow: none;
      }

      &:focus {
        box-shadow: none;
      }
    }

    .form-check-label {
      margin-left: 8px;
      font-size: 13px;
      color: #262729;
      opacity: 0.7;
    }
  }
`
export default Form
