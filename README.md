# URutas

URutas es una aplicación web diseñada para proporcionar a los usuarios una experiencia interactiva en la gestión de rutas. La aplicación utiliza React para el frontend y Flask para el backend. Emplea modelos de aprendizaje automático para brindar al usuario rutas de aprendizaje personalizadas, utilizando bibliotecas como pandas, torch y transformers.

## Funcionalidades

- **React** para un frontend responsivo.
- **Flask** para un backend robusto.
- Modelos de **aprendizaje automático** para funcionalidades mejoradas.
- **CORS** para manejar solicitudes de origen cruzado.
- Integración con la biblioteca de **transformers** para clasificación de secuencias.

## Requisitos

- Node.js
- Python 3.x
- Flask
- pandas
- torch
- transformers
- Flask-CORS

## Instalación

### Configuración del Backend

1. Clona el repositorio:

    ```bash
    git clone https://github.com/naval07/URutas.git
    cd urutas
    ```

2. Instala los paquetes de Python requeridos:

    ```bash
    pip install flask pandas torch transformers flask-cors
    ```

3. Inicia el servidor Flask:

    ```bash
    python server.py
    ```

### Configuración del Frontend

1. Navega al directorio del frontend:

    ```bash
    cd react
    ```

2. Inicia la aplicación React:

    ```bash
    npm start
    ```

## Uso

1. Asegúrate de que el servidor Flask esté en ejecución siguiendo las instrucciones de configuración del backend.
2. Inicia la aplicación React usando las instrucciones de configuración del frontend.
3. Abre tu navegador y navega a `http://localhost:3000` para acceder a la aplicación web URutas.

## Estructura del Proyecto


