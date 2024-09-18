import { List, ListItem } from "@mui/material";
import Link from "next/link";

export default function HeaderPage()
{
    return (
        <header className="fixed w-full top-0 left-0 ">
        <div className='flex justify-between text-[20px] text-white h-full bg-black p-1 '>
           <nav><List className={`flex flex-row justify-start w-screen items-center p-2`}>
           <ListItem className={`flex flex-row justify-start items-center `}> 
           <Link href={'/pages/cadastros'}>Cadastro</Link>
                </ListItem>
            <ListItem className={`flex flex-row justify-start items-center `}>
            
                </ListItem>
            <ListItem className={`flex flex-row justify-start items-center `}> 
               
                </ListItem>
               
                <ListItem className={`flex flex-row justify-start items-center gap-5 `}> 
                <Link href={'/pages/usuario'}>Usuário</Link>
                <Link href={'/'}>Home</Link>
                <Link href={'/pages/login'}>Login</Link>
                </ListItem>
            </List>
            </nav>
            </div>
         </header>
    )
}