import logo from "../../assets/logo.svg";
import { Button, Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <Button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </Button>
      </Content>
    </Container>
  );
}
