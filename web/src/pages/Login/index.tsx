import { useState } from "react";
import {
  BotaoCustomizado,
  Formulario,
  Imagem,
  LinkCustomizado,
  Paragrafo,
  ParagrafoCadastro,
  Titulo,
} from "./style";
import CampoDigitacao from "../../components/CampoDigitacao";

import logo from "./Logo.png";
import ILogin from "../../types/ILogin";
import usePost from "../../usePost";
import autenticaStore from "../../stores/autentica.store";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { erro, sucesso, cadastrarDados, resposta} = usePost()
  const navigate = useNavigate()

  const handleLogin = async(event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();

   const usuario: ILogin = {
    email: email,
    senha: senha
   }

   
   try {
      cadastrarDados({url: "auth/login", dados: usuario })
      autenticaStore.login({ email: email, token: resposta })
      resposta && navigate('/dashboard')
   } catch (error) {
      erro && alert("não foi possível fazer login")
   }
   
  }

  return (
      <>
      <Imagem src={logo} alt="Logo da Voll" />
      <Titulo>Faça login em sua conta</Titulo>
      <Formulario onSubmit={handleLogin}>
          <CampoDigitacao tipo="email" label="Email" valor={email} placeholder="Insira seu endereço de email" onChange={setEmail} />
          <CampoDigitacao tipo="password" label="Senha" valor={senha} placeholder="Insira sua senha" onChange={setSenha} />
          <BotaoCustomizado type="submit">Entrar</BotaoCustomizado>
      </Formulario>
      <Paragrafo>Esqueceu sua senha?</Paragrafo>
      <ParagrafoCadastro>Ainda não tem conta? <LinkCustomizado to="/cadastro">Faça seu cadastro!</LinkCustomizado></ParagrafoCadastro>
      </>  
  )
}