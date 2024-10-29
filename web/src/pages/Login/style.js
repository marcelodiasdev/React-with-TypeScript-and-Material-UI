import { Link } from "react-router-dom";
import styled from "styled-components";
import Botao from "../../components/Botao";

export const Imagem = styled.img`
  padding: em 0;
`;

export const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza)
`;

export const Paragrafo = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--azul-escuro)
`;

export const ParagrafoCadastro = styled(Paragrafo)`
  color: var(--cinza);
`;

export const LinkCustomizado = styled(Link)`
  color: var(--azul-claro);
  font-weight: 700;
  text-decoration: none;
`;

export const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`; 

export const BotaoCustomizado = styled(Botao)`
  width: 50%;
`;