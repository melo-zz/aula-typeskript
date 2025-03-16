let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

let nome: string = "Maria";
let idade: number = 30;
let ativo: boolean = true;



let notas: number[] = [8, 9, 10];
notas.push(7); // Adiciona um novo elemento (7) ao array
console.log(notas[0]); // Saída: 8 (acesso pelo índice)

enum Status {
    Pendente,
    EmAndamento,
    Concluido
}
let tarefa: Status = Status.EmAndamento;


console.log(Status.Pendente);     // Saída: 0
console.log(Status.EmAndamento);  // Saída: 1
console.log(Status.Concluido);    // Saída: 2



function soma(a: number, b: number): number {
    return a + b;
}
console.log(soma(5, 3)); // Saída: 8


function saudacao(nome: string, idade?: number): string {
    return idade ? `Olá, ${nome}, você tem ${idade} anos!` : `Olá, ${nome}!`;
}
console.log(saudacao("Maria")); // Saída: "Olá, Maria!"

class Pessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(): string {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
const pessoa1 = new Pessoa("Carlos", 40);
console.log(pessoa1.apresentar()); // Saída: "Meu nome é Carlos e tenho 40 anos."

class ContaBancaria {
    private saldo: number;
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }
    depositar(valor: number): void {
        this.saldo += valor;
    }
    getSaldo(): number {
        return this.saldo;
    }
}
const conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.getSaldo()); // Saída: 1500

