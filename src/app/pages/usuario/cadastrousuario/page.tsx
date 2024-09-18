import CardPage from "@/app/components/card/CardPage";
import Container from "@/app/components/Container/Container";
import FormUsuario from "@/app/components/form/FormUsuario";
import LayoutPage from "@/app/components/layoutpage/Page";

export default function CadastroUsuario()
{
    return (
        <>
        <LayoutPage>
            <Container classname={"w-full"}> 
                <CardPage>
                    <FormUsuario/>
                   
                </CardPage>
            </Container>
           
        </LayoutPage>
        </>
    )
}