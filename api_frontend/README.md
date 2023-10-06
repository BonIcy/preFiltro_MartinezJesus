# Frontend de la Aplicación

Este es el frontend de la aplicación de gestión de datos (parte administrativa) de la academia. En esta parte de la aplicación, los usuarios pueden ver, agregar, actualizar y eliminar datos de diferentes colecciones, como cursos, asignaturas, estudiantes, profesores y paseos. La interfaz de usuario se basa en React y utiliza Semantic UI React para la creación de formularios y la presentación de datos.

## Estructura del Proyecto

El frontend se organiza en varios componentes y páginas que facilitan la interacción con la aplicación. A continuación, se presenta una breve descripción de los archivos y directorios más importantes:

- **components**: Este directorio contiene componentes reutilizables utilizados en diferentes partes de la aplicación. Algunos de los componentes importantes incluyen `Navbar`, que muestra la barra de navegación, y `Card`, que se utiliza para mostrar los datos recuperados de la API.

- **pages**: Aquí se encuentran las páginas principales de la aplicación, que son accesibles a través de las rutas. Los archivos `Get.js`, `Post.js` y `Update.js` corresponden a las páginas para obtener datos, agregar datos y actualizar datos, respectivamente.

- **App.js**: Este archivo es el punto de entrada de la aplicación y configura las rutas para cada página.

- **index.js**: El archivo principal de React que inicia la aplicación.

## Tecnologías Utilizadas

El frontend de la aplicación utiliza las siguientes tecnologías y bibliotecas:

- React: Biblioteca de JavaScript para crear interfaces de usuario interactivas.

- Axios: Biblioteca para realizar solicitudes HTTP a la API del backend.

- Semantic UI React: Framework de diseño de componentes de interfaz de usuario.

- React Router: Biblioteca para la gestión de rutas y navegación en la aplicación.

## Configuración y Uso

Para configurar y ejecutar el frontend de la aplicación en su entorno local, siga estos pasos:

1. Asegúrese de tener Node.js y npm instalados en su sistema.

2. Clone el repositorio de GitHub del proyecto.

3. Abra una terminal en la carpeta raíz del proyecto y ejecute el siguiente comando para instalar las dependencias:

    ```bash
        npm install

4. Inicie la aplicación ejecutando el siguiente comando:

    ```bash
        npm start

Esto iniciará la aplicación en el puerto 3000 (o en un puerto diferente si el 3000 ya está en uso). Puede abrir su navegador web y acceder a http://localhost:3000 para ver la aplicación en funcionamiento.

## Funcionalidades

El frontend de la aplicación proporciona las siguientes funcionalidades principales:

    Obtener Datos: La página principal muestra una lista de datos de una colección seleccionada. Puede cambiar la colección haciendo clic en los botones de navegación en la barra superior.

    Agregar Datos: La página "Post" le permite agregar nuevos datos a la colección seleccionada. Puede completar un formulario y enviar los datos al backend.

    Actualizar Datos: La página "Update" le permite actualizar los datos existentes de la colección seleccionada. Puede editar los campos y guardar los cambios.

    Eliminar Datos: En la página principal, cada elemento de datos tiene un botón de "Eliminar" que permite eliminar el elemento de la colección.


Este proyecto está bajo la Licencia MIT. Consulte el archivo LICENSE para obtener más detalles.