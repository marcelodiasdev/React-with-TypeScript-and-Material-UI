import styled from "styled-components";

import {PropsCustomizadas}  from "./index"
import Botao from "../../components/Botao";

export const StepCustomizada = styled.div<PropsCustomizadas>`
background-color: ${({ cor }) => cor};
width: 16px;
border-radius: 50%;
`

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 65%;
  justify-content: space-between
`;

export const BotaoCustomizado = styled(Botao)`
  width: 50%;
`;

export const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza);
`;

