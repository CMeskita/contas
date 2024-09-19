"use client"
import { Input, InputType } from "@/app/components/input/Input";
import TextPage from "@/app/components/text/TextPage";
import { inputlight, labellight } from "@/app/lib/Constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link } from "@mui/material";
import { z } from "zod";
import { useForm } from "react-hook-form"
import { useState } from "react";
import { PostUsuario } from "@/domain/conecta/PostUsuario";


// Esquema de validação com zod
const UsuarioSchema = z.object({
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres'),
});

// Tipagem do objeto de validação
type UsuarioFormData = z.infer<typeof UsuarioSchema>

export default function FormUsuario() {
  // Estado para controlar o botão de loading
  const [isLoading, setIsLoading] = useState(false);

  // Hook do formulário com validação
  const usuarioUpForm = useForm<UsuarioFormData>({
    resolver: zodResolver(UsuarioSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = usuarioUpForm;

  // Função para cadastrar o usuário
  async function CadastrarUsuario(data: UsuarioFormData) {
    setIsLoading(true); // Iniciar o estado de carregamento
  
    try {
      await PostUsuario(data); // Esperar pela resolução da Promise de PostUsuario
  
      console.log("Usuário criado com sucesso.");
      reset(); // Resetar o formulário após sucesso
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
    } finally {
      setIsLoading(false); // Garantir que o estado de carregamento seja atualizado
    }
  }
  

  return (
    <div className="flex flex-col justify-center max-w-md mx-auto ">
<TextPage classname={"font-semibold text-black"}>Usuário</TextPage>
      <form onSubmit={handleSubmit(CadastrarUsuario)} className="">
        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <div className="relative">
            <Input.Field
              className={`${inputlight}`}
              id="email"
              type={InputType.email}
              placeholder="Email"
              {...register('email')}
            />
            <label className={labellight}>Email</label>
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>

          <div className="relative">
            <Input.Field
              className={`${inputlight}`}
              id="senha"
              type={InputType.password}
              placeholder="Senha"
              {...register('senha')}
            />
            <label className={`${labellight}`}>Senha</label>
            {errors.senha && <span className="text-red-500">{errors.senha.message}</span>}
          </div>

          <div className="flex flex-col justify-center items-center">
            <Button
              type="submit"
              className="bg-black text-white rounded-md px-2 py-1 text-center text-[14px] w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
        </div>
      </form>

      <div className="flex justify-center">
        <h1 className="text-[14px] font-semibold text-primary-400">
          <Link href={'/'} className="no-underline">Voltar ao Início</Link>
        </h1>
      </div>
    </div>
  );
}


