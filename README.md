# aula-typeskript
# aula-typeskript
# aula-typeskript
# Projeto TypeScript

Este projeto serve como um exemplo básico de configuração e uso do TypeScript com Node.js. Ele inclui a configuração do TypeScript, execução de código básico e exercícios de aprendizagem sobre tipagem, arrays, funções e classes.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

aula-typescript/ │── .git/ # (Não fica visível no VSCode) │── .gitignore # Arquivo para ignorar arquivos no git │── package.json # Configurações do projeto Node.js │── tsconfig.json # Configuração do TypeScript │── src/ # Diretório para arquivos TypeScript │ ├── index.ts # Arquivo principal do TypeScript │── dist/ # Diretório onde os arquivos JavaScript compilados serão gerados

markdown
Copiar
Editar

## Pré-requisitos

- **Node.js** (Instale em: https://nodejs.org/)
- **npm** (gerenciador de pacotes do Node.js)
- **TypeScript** (instalado no projeto)

## Inicializando o Projeto

1. Inicialize o Node.js no projeto:

   ```bash
   npm init -y
Instale o TypeScript localmente:

bash
Copiar
Editar
npm install typescript --save-dev
Crie o arquivo de configuração do TypeScript:

bash
Copiar
Editar
npx tsc --init
Edite o tsconfig.json para definir as configurações de saída dos arquivos JavaScript:

json
Copiar
Editar
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "target": "ES6",
    "module": "CommonJS"
  }
}
Crie as pastas src e dist para armazenar os arquivos TypeScript e os arquivos compilados, respectivamente.

Compilando o TypeScript
Crie o arquivo src/index.ts com o seguinte conteúdo:

typescript
Copiar
Editar
let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);
Compile o código TypeScript para JavaScript com o seguinte comando:

bash
Copiar
Editar
npx tsc
Execute o código compilado:

bash
Copiar
Editar
node dist/index.js
A saída esperada será:

bash
Copiar
Editar
Olá, TypeScript!
Enviando para o GitHub
Adicione os arquivos ao controle de versão:

bash
Copiar
Editar
git add .
Crie um commit:

bash
Copiar
Editar
git commit -m "Configuração inicial do projeto TypeScript"
Envie para o GitHub:

bash
Copiar
Editar
git push origin main
Exercícios
Exercício 1: Tipagem e Arrays
Crie um array de números e imprima a soma dos valores.

typescript
Copiar
Editar
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);
Exercício 2: Função Tipada
Crie uma função que recebe um nome e retorna uma mensagem personalizada.

typescript
Copiar
Editar
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));
Exercício 3: Classe e Instância
Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações.

typescript
Copiar
Editar
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());