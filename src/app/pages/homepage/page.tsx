import CardPage from "@/app/components/card/CardPage";
import Container from "@/app/components/Container/Container";
import LayoutPage from "@/app/components/layoutpage/Page";
import Notificacao from "@/app/components/notificacao/Notificacao";
import TableDespezas from "@/app/components/table/TableDespezas";
import TextPage from "@/app/components/text/TextPage";
import { gridhomepage } from "@/app/lib/Constants";
import Link from "next/link";


export default function HomePage()
{
    return (
        <>
  <LayoutPage>
 
<TextPage  classname={"font-semibold  text-black"}>H O M E </TextPage>
 <Container classname={"w-full"}>
 <div className="flex flex-col gap-5">
        <div  className={gridhomepage}>
            <CardPage> 
                <Link href={'/pages/cadastros/valor'}>Valor</Link>
            </CardPage>
            <CardPage>
                <Link href={'/pages/cadastros/despesas'}>Despesas</Link>
            </CardPage>
            
        </div>
        <div className="">
            <TableDespezas/>
        </div>
  </div>

  <Notificacao/>
    </Container>
    </LayoutPage>
    </>
    )
}