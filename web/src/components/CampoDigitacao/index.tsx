import { Campo, Container, Rotulo } from "./style";

interface Props {
  tipo: string;
  valor: string;
  placeholder: string;
  onChange: (value: string) => void;
  label?: string;
}



export default function CampoDigitacao({
  tipo,
  valor,
  placeholder,
  onChange,
  label,
}: Props) {
  return (
    <Container>
    <Rotulo>{label}</Rotulo>
      <Campo
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </Container>
  );
}
