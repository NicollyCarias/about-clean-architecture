const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('about-clean-architecture : Arquitetura Limpa (Clean Architecture) é um padrão arquitetural proposto por Robert Martin – mais conhecido como Uncle Bob – com o objetivo de promover a implementação de sistemas que favorecem reusabilidade de código, coesão, independência de tecnologia e testabilidade. A arquitetura Clean é uma abordagem de desenvolvimento de software que busca separar as responsabilidades do código em diferentes camadas, com o objetivo de tornar o código mais fácil de entender, testar e manter. Para criar a estrutura de pastas com essa arquitetura');
});

app.listen(3000, function () {
  console.log('Servidor iniciado na porta 3000!');
});
