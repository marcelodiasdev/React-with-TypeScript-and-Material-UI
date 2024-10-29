import styled from "styled-components";

export const Campo = styled.input`
  background: #f0f0f0;
  margin: 1em 0;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  width: 100%;
  padding: 16px;
`;


export const Rotulo = styled.label`
display: block;
font-weight: 700;
font-size: 16px;
line-height: 18px;
color: var(--azul-escuro);
`


export const Container = styled.div`
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`