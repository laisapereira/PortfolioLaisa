# Núcleo de Front-end

Olá, pessoa! Seja bem vindo ao Núcleo de Front-end!
Este repositório será usado para ver e fazer as atividades do núcleo durante este ciclo. Você precisará clonar este repositório no seu computador.

## Instruções de envio de atividades

Crie uma branch a partir da `main` seguindo o padrão `[número da turma]-[nome do indivíduo]` para servir como repositório de suas atividades (por exemplo: a branch sob nome 1-José irá reunir todas as atividade de José feitas no núcleo).

Novas atividades serão enviadas como _issues_ para cada projeto, então fique atento(a) ao Gitlab para ver se não tem nenhuma atividade pendente.

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

Seus commits deverão ser contínuos e explicativos, então nada de fazer a atividade inteira em um só commit com a mensagem _"atividade do nucleo ae"_, beleza? Os orientadores precisam acompanhar o progresso dos membros, e isso será feito através dos seus commits no GitLab.

Para entregar uma atividade, basta abrir um _merge request_ no Gitlab e sua atividade será avaliada.

Além disso, as atividade podem conter desafios opcionais a serem completados, que contaram também na avaliação caso sejam concluídos.

## Observações importantes

Lembre-se que o núcleo é o seu treinamento para começar a trabalhar nos projetos da InfoJr. Portanto, tenha em mente que a sua postura aqui deverá ser adequada para os nossos projetos. Sendo assim, não será tolerado:

### Falta de compromisso com os prazos

Isso inclui também começar a fazer a atividade em cima da hora, pois isso impede que você tenha tempo hábil para lidar com imprevistos, acarretando em atrasos que seriam facilmente evitáveis se houvesse maior antecedência na hora de fazer a atividade.

### Entregas incompletas ou mal feitas

Não se restrinja a apenas o mínimo necessário para a atividade, dê o seu melhor e tente fazer algo que você teria orgulho de mostrar para as pessoas como prova do seu progresso.

### Ausência de comunicação com os orientadores

-   Está com dificuldade? Peça ajuda.
-   Não vai conseguir entregar no prazo? Justifique com antecedência.
-   Algo te incomoda no núcleo? Dê o seu feedback.

Comunicação é essencial em todas as áreas da vida, os núcleos de estudo não são exceção.
