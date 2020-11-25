# Rick & Morty Character Finder

Este proyecto es la evaluación final del módulo III de [Adalab](https://adalab.es/). Se trata de un buscador de los personajes de la serie Rick y Morty desarrollado con [React](https://es.reactjs.org/) y [Sass](https://sass-lang.com/).

## Contenido

Mediante el uso del servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie, se puede filtrar los personajes de la serie por nombre, ordenarlos en orden alfabético y ver los detalles de cada personaje, como si aún están vivos, de dónde proceden o el número de episodios en los que han aparecido.

## Esctructura

~~~
src
├── components
│   ├── CharacterCard
│   │   ├── CharacterCard.js
│   │   └── CharacterCard.scss
│   ├── CharacterDetail
│   │   ├── CharacterDetail.js
│   │   └── CharacterDetail.scss
│   ├── CharacterList
│   │   ├── CharacterList.js
│   │   └── CharacterList.scss
│   ├── Filters
│   │   ├── Filters.js
│   │   └── Filters.scss
│   ├── Header
│   │   ├── Header.js
│   │   └── Header.scss
│   ├── Loader
│   │   ├── Loader.js
│   │   └── Loader.scss
│   ├── NotFound
│   │   ├── NotFound.js
│   │   └── NotFound.scss
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

## Arrancar el proyecto

### `npm install`

Para instalar el proyecto

### `npm start`

Para arrancar el proyecto

### `npm run build`

Para publicar el proyecto a producción
