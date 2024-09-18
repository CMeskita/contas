import { Input, InputType } from "@/app/components/input/Input";
import TextPage from "@/app/components/text/TextPage";
import { inputbold, inputlight, labellight } from "@/app/lib/Constants";

import { Button, Link } from "@mui/material";


export default function FormCadastro()
{
    return (
        <div className="flex flex-col justify-center max-w-md mx-auto ">
	
		<TextPage  classname={"font-semibold  text-black"}>D E S P E S A</TextPage>
			<form className="">
				<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
				
					<div className="relative">
						<Input.Field
						className={`${inputlight}`}						
						id="gasto"
						type={InputType.text}
						placeholder="Nome do Gasto"/>
						<label  className={labellight}>Nome do Gasto</label>
					</div>
					<div className="relative">
						<Input.Field 
						className={`${inputlight}`}						
						id="valor"
						type={InputType.numeric}
						placeholder="Valor" />
						<label  className={`${labellight}`}>Valor</label>
					</div>
					<div className="relative">
						<Input.Field 
						className={`${inputlight}`}						
						id="valor"
						type={InputType.date}
						placeholder="data" />
						<label  className={`${labellight}`}>Data</label>
					</div><div className="relative ">
						<Input.Field 
						className={`${inputlight}`}						
						id="valor"
						type={InputType.text}
						placeholder="obs" />
						<label  className={`${labellight}`}>Observação</label>
					</div>
                    <div className="flex flex-col-1 justify-center items-center  ">
					<Button href={'/'}  className="bg-black text-white rounded-md px-2 py-1  text-center text-[14px] w-full ">Enviar</Button>
                    </div>

				</div>
					
			</form>
			<div className="flex justify-center">
			<h1 className="text-[14px] font-semibold  text-black "><Link href={'/pages/cadastros'} className="no-underline">Voltar aos Cadastro</Link> </h1>
		</div>
		</div>
      
    )
}