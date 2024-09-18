import { createCipheriv, createDecipheriv, createHash, randomBytes } from "crypto";
export const chaveSecreta = "mangacomleitenaofazmal"
export const chave = randomBytes(32);
export const vi = randomBytes(16);

export function gerarCodigo() {
    let numeroAleatorio = "";
    for (let i = 0; i < 9; i++) {
      numeroAleatorio += Math.floor(Math.random() * 10);
    }
    return numeroAleatorio;
  }
  
  export function Ecriptografa(texto:string)
  {
  
  const cifra = createCipheriv('aes256', chave, vi);
  const mensagemCifrada = cifra.update(texto, 'utf-8', 'hex') + cifra.final('hex');
  
  return mensagemCifrada;
  }
    
  // Decifrar a mensagem
  
  export function Decriptogra(mensagemCifrada:string)
  {
      const decifra = createDecipheriv('aes256', chave, vi);
      const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8')
  
      return mensagemDecifrada;
  }

  
  export function criaHash(senha:string){
      return createHash('sha256').update(senha).digest('hex')
      }
  
  export  function gerarTenant(): string {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let tenantId = '';
        for (let i = 0; i < 6; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            tenantId += caracteres[indiceAleatorio];
        }
        return tenantId;
    }
    
 

    