import { Box } from "@mui/material";
import styled from "styled-components";
import Botao from "../../../components/Botao";

export const BoxCustomizado = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  max-height: 90vh;
  overflow-y: auto;
  background-color: white;
  border: none;
  border-radius: 16px;
  padding: 2em 6em;
  `

export const Container = styled.div`
text-align: left;
`

export const ContainerSwitch = styled.div`
text-align: center;
`

export const TextoSwitch = styled.p`
color: var(--cinza);
`

export const BotaoCustomizado = styled(Botao)`
    width: 50%;
    display: block;
    margin: 0 auto;
`

export const ContainerEndereco = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
grid-gap: 0 1em;
`