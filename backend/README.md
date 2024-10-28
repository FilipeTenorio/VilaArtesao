# Vila dos Artesãos API

# Visão Geral
### Esta API é destinada a gerenciar informações sobre artesãos, chalés, eventos e produtos para a instituiçao da vila do artesão que promove os artesãos e seus trabalhos. Abaixo estão descritos os principais endpoints e suas funcionalidades.


# Artesãos
### GET /api/artesaos: Obtém uma lista de todos os artesãos cadastrados.
### GET /api/artesaos/ Obtém as informações detalhadas de um artesão com base no ID fornecido.


# Produtos
### GET /api/produtos: Obtém uma lista de todos os produtos disponíveis.
### GET /api/produtos/categoria: Obtém produtos filtrados por categoria.
### GET /api/produtos/id: Obtém as informações de um produto específico com base no ID fornecido.

# Eventos
### GET /api/eventos: Obtém uma lista de todos os eventos cadastrados.
### GET /api/eventos/id: Obtém as informações detalhadas de um evento com base no ID fornecido.

# Chalés
### GET /api/chales: Obtém uma lista de todos os chalés cadastrados, exibindo o endereço e imagem.
### GET /api/chales/id: Obtém informações detalhadas de um chalé, incluindo a lista de artesãos que trabalham nele.
