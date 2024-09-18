import CardPage from "@/app/components/card/CardPage";
import Container from "@/app/components/Container/Container";
import FormLogin from "@/app/components/form/FormLogin";
import FormUsuario from "@/app/components/form/FormUsuario";
import LayoutPage from "@/app/components/layoutpage/Page";


export default function CadastroCompartilhado()
{
    return (
        <>
        <LayoutPage>
            <Container classname={"w-screen"}> 
                <CardPage>
                <FormUsuario/>
                </CardPage>
            </Container>
        </LayoutPage>
        </>
    )
}