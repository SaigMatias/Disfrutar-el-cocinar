# PAC-Memory
##  Minijuego de memoria construido en javascript <span style="color:#999; font-size:0.8em"> Proyecto final del curso de Javascript de coderhouse</span>

### En este proyecto se uso
- Variables con let y const
- Arrays, método map, rest parameters
- Objetos y json » creación, selección, desestructuración, obtención de valores, parseo
- Ciclos » for y forEach
- Condiconales » if, else if, else; ternarios (? :); switch
- Funciones » arrow functions
- DOM » createElement, innerHTML, remove, querySelector, eventListener, scroll
- LocalStorage » setItem, getItem
- Asincronia » promise, fetch, then, catch; setTimeout
- Librerias » Toastify.js (notificaciones), Luxon.js (fechas)

<br/>

### Estructura del minijuego

> **SECTION START**
- **Crear contenedor y elementos html** → titulos, texto y botones 
- **Botón "Registro"** → traer registro de localStorage y notificar || sino hay registro, traer notificación que "no hay registro".
- **Botón "Tutorial"** → notificación con el tutorial
- **Botón "Jugar"** → iniciar minijuego » eliminar contendor y continuar con historia
- **Botón "Terminar"** → finalizar minijuego

> **SECTION HISTORY**
- **Traer preguntas** » (promise + fetch) → llamar al objeto questionBase.json || sí falla, llamar a backupQuestions.js
- **Crear contenedor y elementos html**
- **Botón "ir a las preguntas"** → eliminar contenedor y continuar con las preguntas

> **SECTION QUESTIONS**
- **Crear preguntas** → Convertir los valores del objeto a un array » Ordenar las preguntas en tres conjuntos » Selecionar aletoriamente un conjunto
- **Crear contenedor y elementos html** → cuestionario
- **Click en preguntas** → Comprobar y registrar sí es correcta o errónea » notificar correcta o pista » eliminar pregunta
- **Botón "Reintentar"** → Registrar el reinicio » Remover contenedor actual » Reiniciar el cuetionario » Notificar el reinicio
- **Botón "Terminar juego"** → Finalizar partida » Eliminar contenedor » enviar a Evaluación (Assessment)

> **SECTION ASSESSMENT**
- **Evaluar resultados** → sumar total de correctas e incorrectas » obtener porcentajes en función de las preguntas totales según los reintentos » clasificar resultados según porcentaje de aciertos
- **Crear contenedor y elementos html**
- **Presentar resultados** → presentar total de aciertos, errores, porcentajes, reintentos y clasificación
- **Botón "Guardar resultados"** → eliminar botones anteriores » Crear formulario » Guardar datos en localStorage » Notificar guardado » Eliminar contenedor » Continuar al cierre del juego
- **Botón "Finalizar sin guardar"** → Eliminar contenedor » Continuar al cierre del juego

> **SECTION ENDING**
- **Crear contenedor y elementos html**
- **Botón "Reiniciar el juego"** → eliminar contenedor » Ir al inicio del juego

<br />

### Mapa del sitio

+ _index.html_

+ **css**
    - _style.css_: estilo del sitio
    - _toastify.css_: estilo de libreria toastify

+ **img** : imágenes para la valoración del resultado

+ **js**
    - _Pac-memory.js_ : inicio del minijuego

    - **components**
        - _backupQuestions.js_ : objeto con preguntas de respaldo en caso de falla en carga de questionBase.json
        - _messages.js_ : variables y arrays con mensajes
        - _questionBase.json_ : preguntas principales para el minijuego
        - _varsAndElementes.js_ : estructura y funciones del minijugo
    - **helpers**
        - _functions.js_ : funciones generales
        - _toastify.js_ : libreria toastify  
        
