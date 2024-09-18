import { Input, InputType } from "@/app/components/input/Input";
import TextPage from "@/app/components/text/TextPage";
import { inputbold, inputlight, labellight } from "@/app/lib/Constants";

import { Button, Link, Typography } from "@mui/material";


export default function FormLogin()
{
    return (
        <div className="flex flex-col justify-center max-w-md mx-auto ">
		<TextPage classname={"font-semibold  text-black"} >L O G I N</TextPage>
			<form className="">
				<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
				
					<div className="relative">
						<Input.Field
						className={`${inputlight}`}						
						id="email"
						type={InputType.email}
						placeholder="Email"/>
						<label  className={labellight}>Email</label>
					</div>
					<div className="relative">
						<Input.Field 
						className={`${inputlight}`}						
						id="password"
						type={InputType.password}
						placeholder="Password" />
						<label  className={`${labellight}`}>Senha</label>
					</div>
                    <div className="flex flex-col-1 justify-center items-center ">
					<Button href={'/'}  className="bg-black text-white rounded-md px-2 py-1  text-center text-[14px] w-full ">Enviar</Button>
                    </div>
					<div className="flex flex-col-1 justify-center items-center ">
					<Button> <Typography className="text-[10px] text-primary-400 ">Ops, Esqueci a Senha!!</Typography></Button>
					</div>	
				</div>
					
			</form>
			<div className="flex justify-center">
			<h1 className="text-[14px] font-semibold  text-primary-400"><Link href={'/'} className="no-underline">Voltar ao Inicio</Link> </h1>
		</div>
		</div>
      
    )
}