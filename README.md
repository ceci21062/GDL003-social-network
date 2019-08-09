# Creando una Red Social

## Índice

- [Introducción](#introduccion)
- [Definición del producto](#definición-del-producto)
- [Historias de Usuario](#historias-de-usuario)
- [Prototipos](#prototipos)
- [Documentación](#documentación)
- [CheckList](#checklist)

---
## Introducción
Este proyecto fue realizado durante el Bootcamp de Laboratoria, sede Guadalajara Generación 003, durante el reto de crear una Red Social. Este proyecto tuvo una duración de 4 semanas divididas en sprints(uno por semana).
Nuestro equipo de trabajo esta conformado por:
- Karen Cecilia Garcia Sandoval
- Gloria Ramirez Robles
- Erika Liliana Sanchez Murguia

## Definición del producto
En los últimos años ha aumentado la conciencia de la sociedad hacia el cuidado de nuestras mascotas, por lo que se han creado diversos grupos que se encargan de rescatar animales callejeros, darles un protócolo de adopción responsable(esterilización, vacunas y desparasitación)y buscarles un hogar adecuado donde reciban las atenciones necesarias. En facebook existen varios grupos dedicados a la difusión de estas adopciones(y que a su vez algunos usuarios utilizan para buscar a su mascota extraviada), por lo que en ocasiones debes ser parte de demasiados grupos para lograr adoptar/dar en adopción una mascota. 
Find Your Pet es una red social enfocada en publicar y hacer conexiones entre personas que quieran realizar los procesos de adopción(y en una futura iteración encontrar mascotas extraviadas).

## Historias de Usuario
#### Historia de usuario 1
Yo como usuario quiero una red social donde pueda registrarme y verificar mi email.

**DoD**
- UI básica
- Página con el formato para poder registrarse como usuario
- Al completar el registro, se envía un email para verificar la cuenta del usuario
- Se almacena en firebase los datos obtenidos del usuario

#### Historia de usuario 2
Yo como usuario quiero una red social donde pueda ingresar con los datos que usé para registrarme, y que me avise si estoy cometiendo errores al iniciar sesión(como escribir mal el email o contraseña).

**DoD**
- Página con formato para poder iniciar sesión
- Botón de "Entrar" que al dar click permite ingresar a la página de Home
- Si se escribe una contraseña o email incorrecto, se imprime en la pantalla un mensaje que informa al usuario sobre que error cometió

#### Historia de usuario 3
Yo como usuario quiero una red social donde al estar en la página de Home me permita cerrar sesión.

**DoD**
- Botón de "Cerrar sesión" que permite al usuario salir de la red social y volver a la página de inicio

#### Historia de usuario 4
Yo como usuario quiero una red social donde pueda registrarme e ingresar con mis datos de Google.

**DoD**
- Botón en la página de Iniciar sesión donde pueda registrarme/ingresar a la red social con mis datos de Google

#### Historia de usuario 5
Yo como usuario quiero una red social donde pueda publicar un post y que este se vea en la interfaz

**DoD**
- Input donde se puede ingresar un mensaje
- Botón para enviar el mensaje
- Se imprime el mensaje en la página donde se escribió

#### Historia de usuario 6 
Yo como usuario quiero una red social donde pueda poner likes en las publicaciones

**DoD**
- Botón en todas las publicaciones realizadas donde al hacer click se agregué un like
- Conteo de likes en la publicación

#### Historia de usuario 7
Yo como usuario quiero una red social donde pueda editar o eliminar mis posts

**DoD**
- Botón que me permite editar mis posts(convierte el texto en un input)
- El post se visualiza ya editado al dar click en un botón de "Guardar"
- Botón que me permite eliminar mis posts, con un mensaje de alerta para confirmar antes de eliminarlo

#### Historia de usuario 8
Yo como usuario quiero una red social donde ademas del muro de Adopta exista un segundo muro de Encuentra(para mascotas extraviadas)

**DoD**
- Interfaz de Encuentra con todas las funciones agregadas en Adopta(publicar, editar, eliminar y contador de likes)

#### Historia de usuario 9
Yo como usuario quiero una red social donde pueda entrar en modo de invitado(sin poder publicar), separar y filtrar mis publicaciones en Públicas o Privadas

**DoD**
- Al momento de escribir un post, te da la opción(con un selector)de publicarlo de manera pública o privada
- Crear acceso como invitado a la red social

## Prototipos

Para este proyecto se creó un prototipo de baja fidelidad orientado a una vista en dispositivo movil.

https://marvelapp.com/4c9hhf4/screen/59333765

Durante esa primer idea del proyecto no considerábamos la página de bienvenida antes de poder iniciar sesión, y buscábamos que el usuario pudiera crear mensajes con varios filtros predeterminados para facilitar la búsqueda de mascotas con las características que necesitan

## Documentación

Creamos un formulario para poder conocer si nuestra idea era viable y los datos qué le interesaría a
nuestro usuario poder visualizar en una red social orientada a la adopción y búsqueda de mascotas extraviadas. Este formulario fue compartido en diversos grupos de facebook de la ZMG donde el objetivo es dar en adopción o ayudar a encontrar mascotas extraviadas

![Ejemplo de una de las publicaciones realizadas](https://i.ibb.co/B2LNV9f/fyp8.jpg)

https://forms.gle/tM9QBrxu1A1styxG6

Los resultados de nuestro formulario fueron 22, pero obtuvimos información valiosa de ellos ya que quienes contestaron son personas interesadas en un proyecto como el nuestro

![¿Alguna vez has adoptado o dado en adopción una mascota?](https://i.ibb.co/V9CzbnB/fyp1.jpg)

![¿Tuviste alguna dificultad durante el proceso](https://i.ibb.co/DWjZKp3/FYP2.jpg)

![¿Crees necesaria una red social enfocada en encontrar a tu mascota?](https://i.ibb.co/0JxL5fV/fyp3.jpg)

![¿Qué esperarías encontrar en esta red social? 1/2](https://i.ibb.co/L1g3dtG/fyp4.jpg)

![¿Qué esperarías encontrar en esta red social? 2/2](https://i.ibb.co/hghbjxY/fyp5.jpg)

Esta pregunta nos dió información útil para plantear futuras iteraciones del proyecto. Se plantea manejar una sección dentro de la red social donde se compartan artículos a modo de blog con tips, consejos y una agenda de eventos realizados por las distintas organizaciones existentes en la ZMG dedicadas al rescate y adopción de animales.

![¿Qué datos crees necesarios saber para adoptar una mascota?](https://i.ibb.co/nkkTNhs/fyp6.jpg)

![¿Te interesaría participar en un test de usabilidad?](https://i.ibb.co/2KGK4f6/fyp7.jpg)

Esta última pregunta es fundamental para poder realizar los tests de usabilidad y las entrevistas con usuarios interesados en aportar a nuestro proyecto. En las siguientes preguntas, en caso de si querer participar en nuestro test, los encuestados nos proporcionaron sus datos de contacto para poder buscarlos en cuanto nuestro proyecto este en una etapa donde podamos realizar estos tests.

## Checklist

### General

* [x] Producto final sigue los lineamientos del diseño.

### `README.md`

* [x] Definición del producto
* [ ] Resumen de entrevistas con usuarios.
* [x] Link/screenshots prototipo de baja fidelidad.
* [ ] Conclusiones de pruebas con el producto en HTML.

### Pruebas / tests

* [ ] Pruebas unitarios cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [x] Permite crear cuenta.
* [x] Valida email.
* [x] Valida password.
* [x] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [x] Permite iniciar sesión.
* [x] Valida email.
* [x] Valida password.
* [x] Muestra mensajes de error.

### Muro (wall/feed)

* [x] Muestra _muro_, o lista de publicaciones.
* [x] Permite hacer nuevas publicaciones.
* [x] Permite eliminar publicaciones.
* [x] Pide confirmación antes de borrar publicación.
* [x] Permite editar publicación en el mismo lugar (in place).
* [ ] Permite filtrar publicaciones por público/privado.
* [x] Permite marcar publicaciones como _gustados_ (like, corazón, estrella,
  etc...).
* [x] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.

### Hacker Edition

* [ ] Permite agregar amigos.
* [ ] Permite eliminar amigos.
* [ ] Permite compartir publicación (en twitter esto es retwittear, en facebook
  es compartir).
* [ ] Permite comentar o responder una publicación.
* [ ] Permite editar perfil.
* [ ] Permite ver perfil o resumen desde el _muro_ o lista de publicaciones.
* [ ] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.
* [ ] Single Page Application (Incluye refactorización)
