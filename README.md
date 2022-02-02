## ORM com NodeJS: API com Sequelize e MySQL

No diretório do projeto digite o seguinte comando para criar o projeto:

`$ npm init -y`

Saída:

`{
  "name": "orm-sequelize",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`

Instalação do Express:

`$ npm install express`

Instalação do Body-parser:

`$ npm install body-parser`

Instalação do nodemon:

`$ npm install --save/dev nodemon`

Logo após configurar o arquivo package.json:

![image-20220201213713278](C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201213713278.png)

Criar dentro da pasta api o arquivo index.js :

![image-20220201213255444](C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201213255444.png)

Criar o script de configuração do servidor no arquivo index.js:

![image-20220201213359566](C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201213359566.png)



Rodando o servidor: `$ npm start`

- Saída no terminal:

![image-20220201213809983](C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201213809983.png)

- Saída no Postman:

  ![image-20220201214618203](C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201214618203.png)



## Descrição do Projeto:

- Criar uma API com NodeJS e algumas de suas principais bibliotecas;
- Aprender na prática como funciona um ORM;
- Usar o Sequelize para fazer operações em bancos sem usar SQL;
- Desenvolver uma aplicação organizada no modelo MVC;
- Aprimorar seus conhecimentos em JavaScript para back-end.

## Estrutura do Projeto:

- Estruturando o Projeto;
- Modelos, migrações seeds;
- Controladores e rotas;
- CRUD com Sequelize;
- Relações e associações;
- Controladores.