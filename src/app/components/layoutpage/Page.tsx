import Container from "@/app/components/Container/Container";
import Footer from "@/app/components/footer/Footer";
import HeaderPage from "@/app/components/headerpage/Page";

interface ILayoutPageProps
{
    children:any
}
export default function LayoutPage({children}:ILayoutPageProps)
{
    return (
        <>
         <HeaderPage/>
      <main className="p-20">
          {children}
          </main>
         <Footer/>
     </>
    )
}