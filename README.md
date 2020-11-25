![Gif](https://media.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif)

# Rick & Morty Character Finder

Este proyecto es la evaluación final del módulo III de [Adalab](https://adalab.es/). Se trata de un buscador de los personajes de la serie Rick y Morty desarrollado con [React](https://es.reactjs.org/) y [Sass](https://sass-lang.com/).

## Contenido

Mediante el uso del servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie, se puede filtrar los personajes de la serie por nombre, ordenarlos en orden alfabético y ver los detalles de cada personaje, como si aún están vivos, de dónde proceden o el número de episodios en los que han aparecido.

A su vez, aparecerán varios mensajes de advertencia, como cuando no hay ningún personaje que coincida con la búsqueda, cuando navega por una URL inexistente y un loader para cuando tarde en producirse la llamada al servidor api.

## Esctructura

~~~
src
├── components
│   ├── CharacterCard --> (renderiza la tarjeta de cada personaje, con su foto, nombre y especie)
│   │   ├── CharacterCard.js
│   │   └── CharacterCard.scss
│   ├── CharacterDetail --> (renderiza a través de una ruta una tajeta con más detalles sobre el personaje, como el planeta, status y episodios)
│   │   ├── CharacterDetail.js
│   │   └── CharacterDetail.scss
│   ├── CharacterList --> (renderiza el listado de tarjetas)
│   │   ├── CharacterList.js
│   │   └── CharacterList.scss
│   ├── Filters --> (renderiza los campos de filtrado por nombre y el de ordenación de nombre por orden alfabético)
│   │   ├── Filters.js
│   │   └── Filters.scss
│   ├── Footer --> (renderiza el footer)
│   │   ├── Footer.js
│   │   └── Footer.scss
│   ├── Header --> (renderiza el logo de la serie con una imagen de Rick y de Morty)
│   │   ├── Header.js
│   │   └── Header.scss
│   ├── Loader --> (renderiza un mensaje y una imagen cuando tarda en producirse la llamada al servidor api)
│   │   ├── Loader.js
│   │   └── Loader.scss
│   ├── NotFound --> (renderiza un mensaje de advertencia cuando se navega por route a una URL inexistente)
│   │   ├── NotFound.js
│   │   └── NotFound.scss
│   ├── NotMatch --> (renderiza un mensaje cuando ningún personaje coincide con los datos introducidos en el campo de búsqueda)
│   │   ├── NotMatch.js
│   │   └── NotMatch.scss
│   └── App.js
│
├── images
├── services
│   └── api.js
├── styleSheets
│   ├── App.scss
│   └── variables.scss
└── index.js


~~~

## La Web

Página principal

![Landing](https://imgur.com/Ix0uNM0.png)

Tarjeta detallada

![CharacterDetail](https://imgur.com/7PzrgLz.png)

## Arrancar el proyecto

### `npm install`

Para instalar el proyecto

### `npm start`

Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'

### `npm run build`

Para publicar el proyecto a producción
