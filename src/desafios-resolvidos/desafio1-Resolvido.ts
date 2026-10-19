// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

interface Func {  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Func;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Func = {
    codigo: 10,
    nome: 'João'
}