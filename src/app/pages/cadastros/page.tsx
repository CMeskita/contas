import CardPage from "@/app/components/card/CardPage";
import Container from "@/app/components/Container/Container";
import LayoutPage from "@/app/components/layoutpage/Page";
import TextPage from "@/app/components/text/TextPage";
import Link from "next/link";

export default function Cadastros()
{
    return (
        <>
    <LayoutPage>

<TextPage  classname={"font-semibold  text-black"}>C A D A S T R O </TextPage>

            <Container classname={"w-screen"}>
         
                <div  className="grid grid-cols-2 justify-between gap-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1">
                        <CardPage> 
                            <Link href={'/pages/cadastros/valor'}><div className="text-center text-[24px] hover:text-gray-500">Valor</div></Link>
                        </CardPage>
                        <CardPage>
                            <Link href={'/pages/cadastros/despesas'}><div className="text-center text-[24px] hover:text-gray-500">Despesas</div></Link>
                        </CardPage>
                        <CardPage>
                            <Link href={'/pages/cadastros/valor'}><div className="text-center text-[24px] hover:text-gray-500">Confiuração</div></Link>
                        </CardPage>
                </div>
            </Container>
    </LayoutPage>
    </>
    )
}