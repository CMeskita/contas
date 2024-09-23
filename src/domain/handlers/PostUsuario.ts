"use server"
import prisma from "@/app/lib/prisma";
import { criaHash, gerarCodigo, gerarTenant } from "@/domain/utilidades/Utilidades";

interface ICadastrarUsuarioProps{
    email:string
    senha:string
}

export default async function PostUsuario({...props}: ICadastrarUsuarioProps): Promise<void> {
  // Remover debugger em produção

  try {
      const tenantId = gerarTenant().toString();
      const codigoRecuperacao = gerarCodigo().toString();
      
      await prisma.usuario.create({
        data: {
          email: props.email,
          senha: criaHash(props.senha),
          registro: new Date().toISOString(), // ISOString pode ser uma melhor escolha para armazenar datas
          tenantid: tenantId,
          ativo: true,
          recuperacodigo: codigoRecuperacao,
        },
      });

      console.log("Usuário criado com sucesso.");
      // Resetar o formulário se for necessário
  } catch (error) {
      
     
console.error("Erro ao cadastrar o usuário:", error);
  } finally {
      
     
await prisma.$disconnect(); // Garantir que a desconexão aconteça
  }
}

  

 