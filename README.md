<h1 align="center">IOASYS-BOOKs</h1>

<h1 align="center">
<img
    alt="IOASYS"
    src="./assets/images/ioasys.gif"
    width=300
    height=700    
  />
</h1>

# Download: [APK](https://drive.google.com/file/d/1FY4nNjJx5HdwPp7u4u3a547lsJjwR25S/view?usp=sharing)

### Funcionalidades


- Login, salvando no localStorage;
- Pegando livros de acordo com a paginação
- Ao selecionar um livro pega na API todos os dados referentes ao livro e mostra seus detalhes.
- Logoff removendo os dados do localStorage


- Funcionalidade que falta a ser encrementada - FILTROS


### Tecnologias

- [Expo](https://expo.io/)
- [Axios](https://github.com/axios/axios) 
- [React Native](https://reactnative.dev/)
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)



### Como usar

```bash
# Clone o repositório
$ git clone git@github.com:alexjou/ioasys.git

# Entre na pasta
$ cd ioasys

# Instale as dependencias
$ yarn install

# Inicie o site
$ yarn start
```

###


## DESCRIÇÃO DO TESTE

![N|Solid](./assets/images/icon.png)

## 🏗 O que fazer?

- Você deve criar seu projeto, subir em um repositório e ao finalizar, enviar o link do seu repositório para a nossa equipe. Lembre-se, NÃO será necessário criar um Pull Request para isso, nós iremos avaliar e retornar por email o resultado do seu teste.

## 🚨 Requisitos

- Seu projeto deverá ser construído utilizando **React Native**.
- Você deve utilizar **Typescript** como linguagem para seu projeto.
- Seu projeto deverá ser construído utilizando o layout disponibilizado na seção **Layout**.
- A integração com a **API** deve ser feita respeitando todos os contratos de **OAuth**.

## 🕵🏻‍♂️ Itens a serem avaliados

- Estrutura do projeto
- Boas práticas da Linguagem/Framework
- Integração com API
- Bibliotecas utilizadas
- Estilização dos componentes
- Persistência de login
- Seguir as exigências da seção **O que desenvolver?**

## 🎁 Extra

Estes itens não são obrigatórios, porém desejados.\*\*\*\*

- Testes unitários
- Linter
- Code Formatter
- Documentação de componentes
- `README.md` com apresentação e descrição de bibliotecas utilizadas
- Git flow

## 💻 O que desenvolver?

Você deverá construi um projeto utilizando o layout proposto.

- [x] Login e acesso de usuário já registrado
- [x] Para o login usamos padrões **OAuth 2.0**. Na resposta de sucesso do login a api retornará um token _authorization_.
- [x] Para ter acesso as demais APIs, precisamos enviar o _authorization_ no header para autorizar a requisição.

**Features:**

- [x] Listagem de Livros
- [x] Paginação ou Carregar Mais em listagem
- [ ]Modal para filtros em listagem com as seguintes opções de filtragem:

1. Nome do livro
2. Autor
3. Categoria
4. Ano de publicação

- Detalhamento do Livro

**Importante:** será avaliada a implementação de métodos para filtragem e listagem, visando a performance do app

## 🔗 Links e Informações Importantes

### 💄 Layout

- Layout e recortes disponíveis no [**Figma**](https://www.figma.com/file/JRUQaA8sZ9PMiu76FcfvNG/Desafio-React-Native%3A-ioasys-books?node-id=0%3A1).

### 🌎 Integração com a API

- [**Documentação**](https://books.ioasys.com.br/api/docs/)
- **API url**: `https://books.ioasys.com.br/api/v1`
- **Usuário de Teste**: `desafio@ioasys.com.br`
- **Senha de Usuário de Teste**: `12341234`
