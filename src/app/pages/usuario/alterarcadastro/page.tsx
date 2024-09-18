import CardPage from "@/app/components/card/CardPage";
import Container from "@/app/components/Container/Container";
import FormLogin from "@/app/components/form/FormLogin";
import LayoutPage from "@/app/components/layoutpage/Page";


export default function AlterarCadastro()
{
    return (
        <>
        <LayoutPage>
            <Container classname={"w-screen"}> 
                <CardPage>
                    <FormLogin/>
                </CardPage>
            </Container>
        </LayoutPage>
        </>
    )
}