


## Informações


O projeto utiliza o [**pnpm**](https://pnpm.io/) como gerenciador de pacotes.

O projeto utiliza um setup de monorepo para dividir dependências entre os projetos, então evite instalar dependências na pasta raiz. Se quiser instalar alguma dependência, veja o exemplo abaixo.

Os projetos que serão utilizados nas atividades estão na pasta **apps**.

Para instalar as dependências de ambos os projetos, basta rodar o comando `pnpm install` na pasta raiz do projeto. Para instalar dependências apenas em um dos projetos, basta entrar na pasta do projeto específico e rodar o comando `pnpm add sua-dependencia-aqui`. Por exemplo:

```bash
cd apps/form
pnpm add tailwindcss
```

Para manter os padrões de commit, este repo utiliza o commitlint e commitzen, então para commitar, basta rodar o comando `pnpm commit` na pasta raiz do repo ou `pnpm -w commit` na pasta de um dos projetos. Por exemplo:

```bash
pnpm commit
```

ou

```bash
cd apps/form
pnpm -w commit
```


=======
# PortfolioLaisa
>>>>>>> e70e88dc0e6acafacda46ed2a30f88c90ca6ccec
