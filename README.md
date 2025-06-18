# Park App Backend

Este é o backend de um sistema de gerenciamento de estacionamento, desenvolvido em NestJS e TypeORM. O sistema permite o cadastro e gerenciamento de vagas, veículos, ocupação de vagas e autenticação de usuários.

## Funcionalidades

- Cadastro, listagem, atualização e remoção de **vagas**
- Cadastro, listagem, atualização e remoção de **veículos**
- Controle de **vagas ocupadas** (entrada e saída de veículos)
- **Autenticação** de usuários via JWT

## Como usar

### 1. Crie um usuário

Antes de acessar qualquer recurso protegido, é necessário criar um usuário.  
Faça um POST para o endpoint `/users` com o seguinte corpo:

```json
{
  "name": "seu_usuario",
  "password": "sua_senha"
}
```

### 2. Faça login para obter o token

Faça um POST para `/auth/login` com o mesmo nome e senha:

```json
{
  "name": "seu_usuario",
  "password": "sua_senha"
}
```

A resposta será:

```json
{
  "access_token": "SEU_TOKEN_JWT"
}
```

### 3. Use o token para acessar os endpoints protegidos

Para acessar os endpoints de vagas, veículos e vagas ocupadas, adicione o token JWT no header das requisições:

```
Authorization: Bearer SEU_TOKEN_JWT
```

Exemplo usando curl:

```bash
curl -H "Authorization: Bearer SEU_TOKEN_JWT" http://localhost:3000/vagas
```

## Endpoints principais

- `POST /users` - Cria um novo usuário
- `POST /auth/login` - Faz login e retorna o token JWT
- `GET /vagas` - Lista vagas (protegido)
- `POST /vagas` - Cria vaga (protegido)
- `GET /veiculos` - Lista veículos (protegido)
- `POST /veiculos` - Cria veículo (protegido)
- `GET /vagas-ocupadas` - Lista vagas ocupadas (protegido)
- `POST /vagas-ocupadas` - Ocupa uma vaga (protegido)

## Observações

- Todos os endpoints (exceto `/users` e `/auth/login`) exigem autenticação JWT.
- Use o token retornado no login para acessar os recursos protegidos.
- Para mais exemplos de uso, utilize a coleção Postman fornecida.

---
```# Park App Backend

Este é o backend de um sistema de gerenciamento de estacionamento, desenvolvido em NestJS e TypeORM. O sistema permite o cadastro e gerenciamento de vagas, veículos, ocupação de vagas e autenticação de usuários.

## Funcionalidades

- Cadastro, listagem, atualização e remoção de **vagas**
- Cadastro, listagem, atualização e remoção de **veículos**
- Controle de **vagas ocupadas** (entrada e saída de veículos)
- **Autenticação** de usuários via JWT

## Como usar

### 1. Crie um usuário

Antes de acessar qualquer recurso protegido, é necessário criar um usuário.  
Faça um POST para o endpoint `/users` com o seguinte corpo:

```json
{
  "name": "seu_usuario",
  "password": "sua_senha"
}
```

 2. Faça login para obter o token

Faça um POST para `/auth/login` com o mesmo nome e senha:

```json
{
  "name": "seu_usuario",
  "password": "sua_senha"
}
```

A resposta será:

```json
{
  "access_token": "SEU_TOKEN_JWT"
}
```

### 3. Use o token para acessar os endpoints protegidos

Para acessar os endpoints de vagas, veículos e vagas ocupadas, adicione o token JWT no header das requisições:

```
Authorization: Bearer SEU_TOKEN_JWT
```

Exemplo usando curl:

```bash
curl -H "Authorization: Bearer SEU_TOKEN_JWT" http://localhost:3000/vagas
```

## Endpoints principais

- `POST /users` - Cria um novo usuário
- `POST /auth/login` - Faz login e retorna o token JWT
- `GET /vagas` - Lista vagas (protegido)
- `POST /vagas` - Cria vaga (protegido)
- `GET /veiculos` - Lista veículos (protegido)
- `POST /veiculos` - Cria veículo (protegido)
- `GET /vagas-ocupadas` - Lista vagas ocupadas (protegido)
- `POST /vagas-ocupadas` - Ocupa uma vaga (protegido)

## Observações

- Todos os endpoints (exceto `/users` e `/auth/login`) exigem autenticação JWT.
- Use o token retornado no login para acessar os recursos protegidos.
- Para mais exemplos de uso, utilize a coleção Postman fornecida.

---