import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Titulo from "../../components/Titulo";
import Subtitulo from "../../components/Subtitulo";
import Tabela from "../../components/Tabela";

export default function PaginaBase() {
  return (
    <>
      <Cabecalho />
    <Titulo />
    <Subtitulo/>
      <main>
        <Outlet />
      </main>
      <Rodape />
    </>
  );
}
