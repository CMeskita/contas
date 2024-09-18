import Container from "@/app/components/Container/Container";
import LayoutPage from "@/app/components/layoutpage/Page";
import TableDespezas from "@/app/components/table/TableDespezas";
import TextPage from "@/app/components/text/TextPage";
import { Button } from "@mui/material";

export default function Usuario()
{
    return (
        <>
    <LayoutPage>

<TextPage  classname={"font-semibold  text-black"}>U SU Á R I O </TextPage>
<div className="flex flex-row justify-end items-center ">
					<Button href={'/pages/usuario/cadastrousuario'}  className="bg-black text-white rounded-full px-2 py-1  text-center text-[20px] w-50 ">+</Button>
                    </div>
            <Container classname={"w-screen"}>
         
                <TableDespezas />
           
            </Container>
    </LayoutPage>
    </>
    )
}