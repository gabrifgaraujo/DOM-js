# 📦 Sistema de CRUD de Produtos

## 📝 Sobre o Projeto

Este é um projeto simples de um site para gerenciar um cadastro de produtos, desenvolvido como parte do exercício do curso **Bolsa Futuro Digital**. O sistema implementa as operações básicas de um CRUD (**C**reate, **R**ead, **U**pdate, **D**elete), permitindo ao usuário:

*   Adicionar novos produtos através de um formulário.
*   Listar todos os produtos cadastrados em uma tabela.
*   Editar as informações de um produto já existente.
*   Excluir um produto da lista.

O projeto foi construído com foco na simplicidade e no aprendizado dos conceitos fundamentais de desenvolvimento web, utilizando HTML, CSS (com TailwindCSS) e JavaScript puro.

---

## ✨ Funcionalidades Principais

O site é dividido em três páginas principais para garantir uma navegação clara e organizada:

1.  **Página Inicial (`index.html`)**:
    *   Apresenta o sistema e oferece links de navegação para as páginas de cadastro e listagem.

2.  **Página de Cadastro (`cadastro.html`)**:
    *   Contém um formulário para registrar um novo produto com os seguintes campos:
        *   Nome
        *   Preço
        *   Categoria
        *   Origem
        *   Lote
        *   Data de Validade

3.  **Página de Listagem (`lista.html`)**:
    *   Exibe todos os produtos cadastrados em uma tabela estilizada.
    *   Cada linha da tabela possui botões de **Editar** e **Excluir** para gerenciar os itens.
    *   Os dados persistem entre as sessões, pois são salvos no `localStorage` do navegador.

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5**: Para a estrutura semântica do site.
*   **CSS3**: Para a estilização, com o auxílio do framework **TailwindCSS** para agilizar o design responsivo.
*   **JavaScript (ES6+)**: Para toda a lógica de manipulação do DOM, eventos, e gerenciamento dos dados dos produtos.
*   **LocalStorage**: Para armazenar os dados dos produtos no navegador, permitindo que as informações não se percam ao fechar ou navegar entre as páginas.

---
