# Gerenciador de Cursos 🎸

Este projeto é uma API para gerenciar cursos de música. Ele permite criar, listar, atualizar, buscar e excluir cursos, com suporte a validações e persistência de dados.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs.
- **Prisma**: ORM para manipulação do banco de dados.
- **SQLite**: Banco de dados utilizado no desenvolvimento.
- **Thunder Client**: Ferramenta para testar requisições (opcional).

---

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (v22.14.0 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`

### Passos para rodar o projeto

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd Atividade-04
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o banco de dados**:
   - Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
     ```
     DATABASE_URL="file:./dev.db"
     ```
   - Execute as migrações para criar as tabelas no banco:
     ```bash
     npx prisma migrate dev --name init
     ```

4. **Inicie o servidor**:
   ```bash
   npm start
   ```

5. **Acesse a API**:
   O servidor estará disponível em `http://localhost:3000`.

---

## 📖 Endpoints da API

### 1. **Listar todos os cursos**
- **Rota**: `GET /courses`
- **Exemplo de resposta**:
  ```json
  [
    {
      "id": 1,
      "title": "Curso de Violão",
      "instrument": "Violão",
      "level": "Iniciante",
      "duration": 12,
      "price": 499.99,
      "instructor": "João Silva",
      "maxStudents": 20,
      "concluida": false,
      "criadaEm": "2025-04-10T12:00:00.000Z"
    }
  ]
  ```

---

### 2. **Criar um novo curso**
- **Rota**: `POST /courses`
- **Body (JSON)**:
  ```json
  {
    "title": "Curso de Violão",
    "instrument": "Violão",
    "level": "Iniciante",
    "duration": 12,
    "price": 499.99,
    "instructor": "João Silva",
    "maxStudents": 20
  }
  ```
- **Exemplo de resposta**:
  ```json
  {
    "id": 1,
    "title": "Curso de Violão",
    "instrument": "Violão",
    "level": "Iniciante",
    "duration": 12,
    "price": 499.99,
    "instructor": "João Silva",
    "maxStudents": 20,
    "concluida": false,
    "criadaEm": "2025-04-10T12:00:00.000Z"
  }
  ```

---

### 3. **Buscar um curso por ID**
- **Rota**: `GET /courses/:id`
- **Exemplo de resposta**:
  ```json
  {
    "id": 1,
    "title": "Curso de Violão",
    "instrument": "Violão",
    "level": "Iniciante",
    "duration": 12,
    "price": 499.99,
    "instructor": "João Silva",
    "maxStudents": 20,
    "concluida": false,
    "criadaEm": "2025-04-10T12:00:00.000Z"
  }
  ```

---

### 4. **Atualizar um curso**
- **Rota**: `PUT /courses/:id`
- **Body (JSON)**:
  ```json
  {
    "title": "Curso de Guitarra",
    "instrument": "Guitarra",
    "level": "Avançado",
    "duration": 16,
    "price": 699.99,
    "instructor": "Maria Souza",
    "maxStudents": 15,
    "concluida": true
  }
  ```
- **Exemplo de resposta**:
  ```json
  {
    "id": 1,
    "title": "Curso de Guitarra",
    "instrument": "Guitarra",
    "level": "Avançado",
    "duration": 16,
    "price": 699.99,
    "instructor": "Maria Souza",
    "maxStudents": 15,
    "concluida": true,
    "criadaEm": "2025-04-10T12:00:00.000Z"
  }
  ```

---

### 5. **Excluir um curso**
- **Rota**: `DELETE /courses/:id`
- **Exemplo de resposta**:
  ```json
  {
    "message": "Curso deletado com sucesso!"
  }
  ```

---

## 🛠 Decisões de Design e Arquitetura

1. **Estrutura MVC**:
   - **Controllers**: Contêm a lógica de negócios e manipulam as requisições/respostas.
   - **Models**: Responsáveis pela interação com o banco de dados usando o Prisma.
   - **Routes**: Definem as rotas da API e conectam os endpoints aos controllers.

2. **Banco de Dados**:
   - Utilizamos o SQLite para simplicidade no desenvolvimento. O Prisma facilita a migração para outros bancos, como PostgreSQL ou MySQL, se necessário.

3. **Validação de Dados**:
   - Validações básicas são realizadas nos controllers para garantir que os campos obrigatórios sejam fornecidos.

4. **ORM Prisma**:
   - Escolhido pela facilidade de uso, suporte a migrações e integração com TypeScript.

---

## 🧪 Testando a API

Recomenda-se o uso do **Thunder Client**  para testar os endpoints. Certifique-se de que o servidor está em execução antes de enviar as requisições.

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais.