# Library

Biblioteca virtual para gerenciamento de livros, desenvolvida como parte da seção Organizing Your JavaScript Code do curso JavaScript do [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-library), com foco em **construtores de objetos**, **protótipos** e **separação entre dados e exibição**.

## Objetivo do Projeto

O objetivo principal era praticar:
- Construtores de objetos e funções de protótipo
- Separação de responsabilidades: lógica de dados vs. exibição no DOM
- Armazenamento de objetos em array e manipulação dinâmica
- Uso do elemento `<dialog>` para formulários modais
- Associação de elementos do DOM com objetos via `data-attributes`

## O que é?

Uma aplicação web para cadastrar e gerenciar uma coleção de livros, contendo:
- **Tabela dinâmica** com a lista de livros cadastrados
- **Modal de cadastro** para adicionar novos livros
- **Controle de leitura** com indicador visual (lido/não lido)
- **Remoção de livros** da biblioteca

## Como usar

1. Abra o arquivo `index.html` em seu navegador
2. Clique em "Adicionar" para abrir o formulário de novo livro
3. Preencha título, autor e número de páginas
4. Clique em "Confirm" para adicionar o livro à tabela
5. Use "Marcar Lido/Não Lido" para alternar o status de leitura
6. Use "Remover" para excluir um livro da lista

## Funcionalidades

- **Adicionar livros**: Formulário modal (`<dialog>`) com campos de título, autor e número de páginas
- **Tabela dinâmica**: Renderização automática da lista de livros a partir do array de dados
- **Toggle de leitura**: Indicador visual colorido (vermelho/verde) para status de leitura, usando função de protótipo no construtor `Book`
- **Remover livros**: Exclusão de livros individuais via `data-attributes` associados ao ID único
- **IDs únicos**: Cada livro recebe um identificador único via `crypto.randomUUID()`
- **Sem persistência**: Os dados existem apenas em memória durante a sessão, conforme proposto pela lição

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

---

Projeto desenvolvido seguindo: [The Odin Project - Library](https://www.theodinproject.com/lessons/node-path-javascript-library)

📍 **Repositório principal com todos os projetos**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
