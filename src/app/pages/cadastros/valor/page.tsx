import CardPage from "@/app/components/card/CardPage";
import Container from "@/app/components/Container/Container";
import FormValor from "@/app/components/form/FormValor";
import LayoutPage from "@/app/components/layoutpage/Page";

export default function Valor()
{
    return (
        <>
      <LayoutPage>
        <Container  classname={"w-screen"}>
          <CardPage>
            <FormValor/>
            </CardPage>
        </Container>
      </LayoutPage>
          </>
    )
}