// Como podemos melhorar o esse código usando TS? 
enum Trabalho{
    'Atriz',
    'Pedreiro',
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa3: Humano = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Pedreiro
}