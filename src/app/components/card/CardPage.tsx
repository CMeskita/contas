import { Card } from "@mui/material"

interface ICardPageProps{
    children:any
}
export default function CardPage({children}:ICardPageProps)
{
    return(<>
     
            <Card className="px-4 py-10 bg-secundary-100 shadow-lg xs:rounded-3xl xs:p-20 h-full">
            {children}
            </Card>
       
    
        </>)
}