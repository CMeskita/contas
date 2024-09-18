"use server"
import prisma from "@/app/lib/prisma";
import { criaHash, gerarCodigo, gerarTenant } from "@/domain/utilidades/Utilidades";

interface ICadastrarUsuarioProps{
    email:string
    senha:string
}

export async function PostUsuario({...props}:ICadastrarUsuarioProps) {
    debugger;
	//setIsLoading(true);
	
    try {
      const tenantId = gerarTenant().toString();
      const codigoRecuperacao = gerarCodigo().toString();
      try {
        const tenantId = gerarTenant().toString();
        const codigoRecuperacao = gerarCodigo().toString();
        
        const novoUsuario = await prisma.usuario.create({
          data: {
            email: props.email,
            senha:criaHash(props.senha),
            registro: new Date().toString(),
            tenantid: tenantId,
            ativo: true,
            recuperacodigo: codigoRecuperacao,
          },
        });
        
        console.log("Usuário criado com sucesso:", novoUsuario);
     // Resetando o formulário após sucesso
      } catch (error) {
        console.error("Erro ao cadastrar o usuário:", error);
    }  
} finally {
    await prisma.$disconnect();
  } 
}
