# DiscFinder
## Apresentação

 o [DiscFinder](https://discfinder.vercel.app/) utiliza a [API do Discogs](https://www.discogs.com/developers) para buscar entre artistas, gravadoras e álbuns (lançamento principal e outras edições), e retorna uma lista de resultados que pode ser filtrada entre estas 4 opções.
 ![Busca no app](https://i.ibb.co/RGp800YL/image.png)Ao clicar num resultado, é exibida uma página para o item. Abaixo, um exemplo de página do álbum Californication:
 ![Californication](https://i.ibb.co/mFD5MTmZ/image.png)
## Informações técnicas
A aplicação foi desenvolvida utilizando o framework Vue.js, e as bibliotecas Vuetify e Vue Router, para estilização e navegação, respectivamente. A API consumida é a [Discogs](https://www.discogs.com/developers), onde é realizada a busca, e também de onde são carregadas para cada página de perfil as informações.
## Executar o projeto localmente
Para executar o projeto localmente, basta clonar o repositório e, com node.js e Vue.js instalados na máquina, executar os seguintes comandos na pasta raiz do projeto:

`npm install`
`npm run dev`
