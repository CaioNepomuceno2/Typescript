# Estudos de TypeScript

Anotações e exercícios do curso de **TypeScript da Take Blip na plataforma [DIO](https://www.dio.me/)**, feitos em 2022. O repositório reúne os exemplos comentados da aula, as minhas resoluções dos desafios e um resumo do que aprendi.

> Parte da minha trilha de estudos — [github.com/CaioNepomuceno2](https://github.com/CaioNepomuceno2)

**Créditos:** os exemplos de `src/exemplos/`, as respostas de referência de `src/respostas/` e a configuração inicial do projeto vêm do material da aula ministrada pela Take Blip na DIO. As resoluções em `src/desafios-resolvidos/` e estas anotações são minhas.

## Resumo do que estudei

| Tema | Ideia principal | Arquivo |
|------|-----------------|---------|
| Tipagem básica e inferência | Parâmetros tipados; o TS infere o tipo pelo valor inicial; `as HTMLInputElement` e checagem de `null` ao usar o DOM | `src/exemplos/basico.ts` |
| `any` | Aceita qualquer valor e desliga a checagem de tipos — deve ser evitado | `src/exemplos/any.ts` |
| `unknown` e `never` | `unknown` exige validação (`typeof`) antes de ser atribuído; `never` indica que a função nunca termina normalmente (ex.: lança erro) | `src/exemplos/any-vs-unknown-e-never.ts` |
| Union types e `type` | `type input = number \| string` e tratamento de cada tipo dentro da função | `src/exemplos/combinando.ts` |
| Objetos e arrays | Inferência em objetos, tipagem explícita de propriedades e `string[]` | `src/exemplos/objetos.ts` |
| Funções | Tipo de retorno explícito, `void` e funções como parâmetro (`(num: number) => void`) | `src/exemplos/functions.ts` |
| `enum` | Padronizar valores fixos (ex.: profissões) e usá-los dentro de um `type` | `src/exemplos/enum.ts` |
| `tsconfig.json` | `target`, `lib`, `outDir`/`rootDir`, `sourceMap` e o modo `strict` | `tsconfig.json` |

### Desafios resolvidos

- **Desafio 1** (`src/desafios-resolvidos/desafio1-Resolvido.ts`): tipar um objeto criado vazio e preenchido depois, usando `interface` e *type assertion* (`{} as Func`).
- **Desafio 2** (`src/desafios-resolvidos/desafio2-Resolvido.ts`): substituir strings soltas por um `enum` de profissões e um `type Humano`.

As respostas de referência do curso, incluindo o desafio 3 (manipulação do DOM com `!` — *non-null assertion*), estão em `src/respostas/` e ficam fora da compilação (`exclude` no `tsconfig.json`).

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) (LTS).

```bash
git clone https://github.com/CaioNepomuceno2/estudo-typescript.git
cd estudo-typescript
npm install

npm run build   # compila src/ para dist/ (tsc)
npm run watch   # recompila a cada alteração
npm start       # abre o index.html com lite-server em http://localhost:3000
```

O `index.html` carrega `dist/app.js`. Para testar outro arquivo, altere o `src` da tag `<script>` (por exemplo, `dist/exemplos/basico.js`, que usa os campos e o botão da página) e veja a saída no console do navegador.

## Estrutura

```
estudo-typescript/
├── index.html                 # página de testes (inputs + botão)
├── package.json               # scripts build / watch / start
├── tsconfig.json              # configuração do compilador (strict, outDir dist)
└── src/
    ├── app.ts                 # arquivo livre para testes
    ├── exemplos/              # exemplos comentados da aula
    ├── desafios-resolvidos/   # minhas resoluções
    └── respostas/             # respostas de referência do curso
```
