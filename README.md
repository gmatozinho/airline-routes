# Descrição #

## Como executar ##

O projeto foi construído usando node, então é necessário possuir node instalado na máquina: <https://nodejs.org/en/download/>

Após isso dentro do diretório do projeto é necessário executar: ```npm i``` ,para instalar os pacotes usados.

Enfim para executar a aplicação basta digitar no bash: ```node server input-routes.csv``` ou ```npm start```.

## Estrutura ##

O projeto possui o arquivo: ```server.js``` que contém o código que inicia a aplicação.

E esta dividido em 5 diretórios: ```application, controllers, routes, tests, utils```.

### Application ###

Contém os arquivos que inicializam as duas interfaces da nossa aplicação, o ```bashapp.js``` que inicializa a interface bash e o ```expressapp.js``` que inicializa nossa interface rest.

### Controllers ###

Contém os arquivos que executam as tarefas chamadas via endpoint usando a interface rest.

### Routes ###

Contém as definições dos endpoints tratando entrada e saída da requisição.

### Tests ###

Contém os arquivos de testes.

### Utils ###

Contém os arquivos ```file.js``` que comanda operações de leitura e escrita em arquivo, ```graph.js``` comanda as operações envolvendo grafos como criação e busca do melhor caminho, ```output.js``` trata as saídas da aplicação, no momento somente o output do bash.

## Decisão de design ##

Todas as pastas contém um arquivo index que centraliza a exportação de todos os metódos. Tentei modularizar as funções da melhor forma e por afinidade. Percebi que a melhor solução para o problema era utilizar grafos e para encontrar caminho no grafo usei o algoritmo Dijkstra’s. Separei as interfaces de aplicação a fim de desacoplar os dominios. Utilizei arrow-functions pois é como custumo trabalhar normalmente e acho que fica mais legivel o código. E optei por javascript por ser a linguagem que tenho mais trabalhado atualmente.

## Descrição de api rest ##

A api possui dois endpoints, GET -> ```/route/best``` e  POST->```/route```

### GET -> /route/best ###

Recebe parametros via query, eles são: origin e destiny, e retorna um objeto contendo "best-route".

* Requisição:

```shell
localhost:3000/route/best?origin=ORL&destiny=CDG
```

* Resposta:

```shell
{
    "best-route": "ORL - CDG > $100"
}
```

### POST-> /route ###

Recebe um objeto via body, contendo os atributos: origin, destiny e price retornando um objeto contendo "insertedLine".

* Requisição:

```shell
localhost:3000/route
```

```shell
{
    "origin": "ORL",
    "destiny": "CDG",
    "price": "100"
}
```

* Resposta:

```shell
{
    "insertedLine": "ORL,CDG,100"
}
```
