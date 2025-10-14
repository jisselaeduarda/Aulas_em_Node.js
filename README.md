# 🧠 Aulas em Node.js

Mini projeto desenvolvido como parte dos meus estudos de **Node.js**, com foco em compreender a criação de servidores, rotas e respostas básicas utilizando o **Express**.

---

## 🚀 Tecnologias utilizadas
- **Node.js**
- **Express.js**
- **Nodemon** (para ambiente de desenvolvimento)

---

## 📌 Objetivo do projeto
Este exercício simula uma **API simples** capaz de responder a requisições HTTP.  
O propósito é consolidar conceitos fundamentais do backend, como:
- Estrutura básica de um servidor Node.js  
- Configuração de rotas com Express  
- Retorno de respostas no formato JSON  
- Execução local do servidor com Nodemon

---

## ⚙️ Como executar o projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/jisselaeduarda/Aulas_em_Node.js.git
Acessar o diretório

cd Aulas_em_Node.js

Instalar as dependências

npm install
Executar o servidor

npm start


Exemplo de rota
app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});


Resposta esperada no navegador:

Olá, Mundo!
