# API de Imágenes

## Endpoints

### `GET /images/:id`

Obtiene una imagen específica por su ID.

#### Parámetros

- `id`: ID de la imagen (opcional). Si no se proporciona, se devolverán todas las imágenes.

#### Respuesta

- `200 OK`: Devuelve un objeto con el estado y los datos de la imagen o imágenes.
- `500 Internal Server Error`: Si ocurre un error, devuelve un objeto con el estado y los detalles del error.

---

### `GET /images/random`

Obtiene una imagen aleatoria.

#### Respuesta

- `200 OK`: Devuelve un objeto con el estado y los datos de la imagen.
- `500 Internal Server Error`: Si ocurre un error, devuelve un objeto con el estado y los detalles del error.

---

### `POST /images`

Guarda una nueva imagen.

#### Parámetros

- `description`: Descripción de la imagen (obligatorio).
- `file`: Archivo de la imagen (obligatorio).

#### Respuesta

- `201 Created`: Devuelve un objeto con el estado y los datos de la imagen creada.
- `400 Bad Request`: Si los parámetros no son válidos, devuelve un objeto con el estado y los detalles del error.
- `500 Internal Server Error`: Si ocurre un error, devuelve un objeto con el estado y los detalles del error.
