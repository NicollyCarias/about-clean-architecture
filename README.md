# about-clean-architecture
Arquitetura Limpa (Clean Architecture) é um padrão arquitetural proposto por Robert Martin – mais conhecido como Uncle Bob – com o objetivo de promover a implementação de sistemas que favorecem reusabilidade de código, coesão, independência de tecnologia e testabilidade.


A arquitetura Clean é uma abordagem de desenvolvimento de software que busca separar as responsabilidades do código em diferentes camadas, com o objetivo de tornar o código mais fácil de entender, testar e manter. Para criar a estrutura de pastas com essa arquitetura, podemos seguir os seguintes passos:

Crie uma pasta para o projeto e acesse-a:

mkdir meu-projeto
cd meu-projeto

Crie as pastas para cada uma das camadas da arquitetura Clean:

mkdir -p src/infra
mkdir -p src/domain
mkdir -p src/use-cases
mkdir -p src/controllers


Na pasta infra, crie os módulos responsáveis por implementar as operações de infraestrutura, como acesso a bancos de dados, envio de emails, etc.

touch src/infra/database.js
touch src/infra/email.js


Na pasta domain, crie os módulos que representam as entidades do domínio da aplicação, ou seja, as classes que encapsulam as regras de negócio.

touch src/domain/user.js
touch src/domain/order.js


Na pasta use-cases, crie os módulos que implementam os casos de uso da aplicação, ou seja, as classes que orquestram as operações de domínio e infraestrutura para atender às necessidades do usuário.

touch src/use-cases/create-user.js
touch src/use-cases/list-orders.js


Na pasta controllers, crie os módulos que implementam os controladores da aplicação, ou seja, as classes que recebem as requisições HTTP dos clientes, chamam os casos de uso correspondentes e retornam as respostas adequadas.

touch src/controllers/user-controller.js
touch src/controllers/order-controller.js


Crie um arquivo index.js na raiz do projeto que inicialize a aplicação e configure as rotas HTTP. Esse arquivo não faz parte da arquitetura Clean, mas é necessário para tornar a aplicação executável.

const express = require('express');
const app = express();

const userController = require('./src/controllers/user-controller');
const orderController = require('./src/controllers/order-controller');

app.use('/users', userController);
app.use('/orders', orderController);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});

Inicie o servidor executando o comando:

node index.js

O servidor estará disponível em http://localhost:3000.