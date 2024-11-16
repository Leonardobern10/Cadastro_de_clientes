# Sistema de Gerenciamento de Usuários - API Restful

Este é um sistema de gerenciamento de usuários baseado em uma API Restful utilizando Node.js, Express e MySQL. O sistema permite realizar operações CRUD (Create, Read, Update, Delete) para gerenciar usuários em um banco de dados MySQL.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework para construção de APIs.
- **MySQL**: Banco de dados relacional.
- **Jest**: Framework para testes unitários.
- **TypeScript**: Superset de JavaScript com tipagem estática.

## Instalação

### 1. Clone o Repositório

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/usuario-api.git
```

### 2. Instale as Dependências

Navegue até o diretório do projeto e instale as dependências:

```bash
cd usuario-api
npm install
```

### 3. Configuração do Banco de Dados

Antes de rodar a aplicação, configure seu banco de dados MySQL. Certifique-se de que o MySQL esteja rodando e crie um banco de dados conforme as configurações abaixo.

Adicione as variáveis de ambiente necessárias em um arquivo `.env` na raiz do projeto:

```bash
HOST=localhost
USER=root
PASSWORD=senha
DATABASE=exsystem
PORT=3000
```

### 4. Rodando a Aplicação

Para iniciar o servidor, execute:

```bash
npm start
```

A API estará disponível no endereço `http://localhost:3000`.

## Endpoints da API

### 1. **GET /users**

Retorna todos os usuários cadastrados.

**Resposta**:

- Status: `200 OK`
- Corpo: Lista de usuários no formato JSON.

### 2. **GET /users/{id}**

Retorna um usuário específico com base no ID.

**Parâmetros**:

- `id`: ID do usuário.

**Resposta**:

- Status: `200 OK` (se encontrado) ou `404 Not Found` (se não encontrado)
- Corpo: Detalhes do usuário em formato JSON.

### 3. **POST /users**

Cria um novo usuário.

**Corpo**:

```json
{
  "name": "Nome do usuário",
  "age": 25,
  "email": "usuario@email.com",
  "password": "senha123"
}
```

**Resposta**:

- Status: `201 Created`
- Corpo: Mensagem de sucesso.

### 4. **POST /users/bulk**

Cria múltiplos usuários em massa.

**Corpo**:

```json
[
  {
    "name": "Nome do usuário 1",
    "age": 25,
    "email": "usuario1@email.com",
    "password": "senha123"
  },
  {
    "name": "Nome do usuário 2",
    "age": 30,
    "email": "usuario2@email.com",
    "password": "senha456"
  }
]
```

**Resposta**:

- Status: `201 Created`
- Corpo: Mensagem de sucesso.

### 5. **PUT /users/{id}**

Atualiza as informações de um usuário específico com base no ID.

**Parâmetros**:

- `id`: ID do usuário.

**Corpo**:

```json
{
  "name": "Nome Atualizado",
  "age": 26,
  "email": "usuario@novoemail.com",
  "password": "novasenha123"
}
```

**Resposta**:

- Status: `200 OK` (se sucesso)
- Corpo: Mensagem de sucesso.

### 6. **DELETE /users/{id}**

Deleta um usuário específico com base no ID.

**Parâmetros**:

- `id`: ID do usuário.

**Resposta**:

- Status: `200 OK` (se sucesso) ou `404 Not Found` (se não encontrado)
- Corpo: Mensagem de sucesso.

## Testes

Os testes para a aplicação podem ser executados usando o Jest. Para rodar os testes:

```bash
npm test
```

## Estrutura do Projeto

```bash
src/
├── config/                  # Configurações do banco de dados
├── controller/              # Controladores da aplicação
├── model/                   # Modelos de dados (como o User)
├── repository/              # Repositórios responsáveis pela persistência de dados
├── service/                 # Lógica de negócios
└── utils/                   # Utilitários e helpers
```

## Contribuindo

1. Fork este repositório.
2. Crie uma branch para sua alteração (`git checkout -b minha-alteracao`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o branch original (`git push origin minha-alteracao`).
5. Crie uma nova Pull Request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver alguma dúvida, entre em contato com [leonardo.bernardo2658@gmail.com] ou [linkedin/in/leonardo-bern].
