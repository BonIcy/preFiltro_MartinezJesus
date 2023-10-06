# Backend de la Aplicación de Academia

Este es el backend de la aplicación de academia, que proporciona una API para gestionar datos relacionados con cursos, asignaturas, estudiantes, profesores y más.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Configuración](#configuración)
- [Endpoints de la API](#endpoints-de-la-api)
- [Documentación de la API](#documentación-de-la-api)
- [Licencia](#licencia)

## Descripción

El backend de la aplicación de academia está construido utilizando Node.js y MongoDB como base de datos. Proporciona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar datos en diferentes colecciones, como cursos, asignaturas, estudiantes y profesores.

## Configuración

Antes de ejecutar el backend, asegúrate de configurar las siguientes variables de entorno en un archivo `.env`:

- `DDBB256`: La URL de conexión a la base de datos de MongoDB.
- `PORT256`: El puerto en el que se ejecutará el servidor.

Asegúrate de instalar las dependencias utilizando `npm install` antes de iniciar el servidor:

        npm install 

Inicie el backend ejecutando alguno de los siguientes comando:

        npm run dev 

        npm run start 

## Endpoints de la API

El backend proporciona los siguientes endpoints de la API:

    GET /api/:collectionName: Obtiene todos los elementos de una colección específica.
    POST /api/add/:collectionName: Agrega un nuevo elemento a una colección específica.
    DELETE /api/del/:collectionName/:itemId: Elimina un elemento de una colección por su ID.
    PUT /api/upd/:collectionName/:itemId: Actualiza un elemento de una colección por su ID.

Cada endpoint maneja datos en función de la colección especificada, como cursos, asignaturas, estudiantes, profesores, etc.

## Documentación de la API 

La documentación de la API se encuentra disponible en la ruta /api-docs. Puedes acceder a ella a través de un navegador web para obtener información detallada sobre los endpoints y cómo usarlos. Esta documentación está generada con Swagger.
Licencia

[Link en donde se encuentra el swagger](../API_backend/swagger/)

Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles sobre los términos de la licencia.