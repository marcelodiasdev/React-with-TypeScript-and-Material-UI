import { Outlet } from "react-router-dom";
import { Container, ContainerPrincipal } from "./style";

export default function PaginaBaseFormulario() {
  return (  
    <ContainerPrincipal>
      <Container>
        <Outlet />
      </Container>
    </ContainerPrincipal> 
  ) 
}