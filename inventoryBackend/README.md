# Backend de Inventário
Backend para a aplicação de Gestão de Inventário, construída com TypeScript e SQLite.

## Pré-requisitos

- Node.js (v14+)

## Começando

1. **Clone o Repositório**:
    ```sh
    git clone https://github.com/rubemoon/inventoryapp.git
    cd inventoryapp/inventoryBackend
    ```

2. **Instale as Dependências**:
    ```sh
    npm install
    ```

3. **Configure o Banco de Dados**:
    ```sh
    npm run setup-db
    ```

4. **Compile o Projeto**:
    ```sh
    npm run build
    ```

## Scripts Disponíveis

- `npm run build`: Compila o código TypeScript.
- `npm run setup-db`: Configura o banco de dados SQLite.

## Comandos SQLite

Para interagir com o banco de dados SQLite, você pode usar a ferramenta de linha de comando `sqlite3`:

```sh
sqlite3 database.sqlite
```

Para mais informações sobre como usar os comandos do SQLite, consulte a [Documentação do SQLite](https://www.sqlite.org/cli.html).

Para exemplos de comandos SQLite, visite [SQLite Tutorial](https://www.sqlitetutorial.net/).

## Licença

Este projeto está licenciado sob a Licença MIT.