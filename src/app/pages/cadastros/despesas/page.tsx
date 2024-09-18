import CardPage from "@/app/components/card/CardPage";
import Container from "@/app/components/Container/Container";
import FormCadastro from "@/app/components/form/FormCadastro";
import LayoutPage from "@/app/components/layoutpage/Page";

export default function Despesas()
{
    return (
        <>
        <LayoutPage>
      <Container  classname={"w-screen"}>
        <CardPage>
          <FormCadastro/>
        </CardPage>
      </Container>
        </LayoutPage>
          </>
    )
}