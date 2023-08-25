# DISFRUTAR EL COCINAR

## RESUMEN
Sitio web creado con Html, SCSS y Bootstrap

El diseño de este sitio web es responsive, se construyo desde mobile first, y se adapta tanto a pantalla mobile como a desktop. 
Las páginas comparten una estructura principal, además de tener variaciones individuales que las diferencias de las demás. 


### ESTRUCTURA PRINCIPAL 

· Encabezado (header) con logo y menú, que se adaptan y cambian según el ancho de pantalla.
· Contenedor principal para el contenido.
· Pie de pággina (footer).
· Panel lateral (aside) para redes sociales, con tooltips, que solo es visible en pantallas mayores a 768px.


### VARIANTES POR PAGINA

    INICIO
        · Animación de bienvenida
        · Distribución de contenido en dos bloques
        
    RECETAS
        · Categorias y listado de recetas hechos en bootstrap y animación en css
        · Modal de bootstrap para contenido en costrucción
        
    RECURSOS
        · Animación con libreria AOS al hacer scroll
        · Modal de bootstrap para contenido en costrucción
    
    TRADICION
    
    CONTACTO
        · Animación de aparición de formulario basada en animista.net
        · Efectos de hover y focus implementados con css
        · Validación del formulario mediante html
        · Envío del formulario a una página de "simulacro de envío" (construida principalmente con Bootstrap).
        
    



## VERSION EXTENDIDA


### SCSS


#### Estructura de directorios

    css/main.scss
    css/partials/_animaciones.scss
    css/partials/_bloques.scss
    css/partials/_contenedores.scss
    css/partials/_footer.scss
    css/partials/_header.scss
    css/partials/_menu-aside.scss
    css/partials/_modal.scss
    css/partials/_reset.scss
    css/partials/_responsive.scss
    css/partials/_variables.scss


#### VARIABLES, MAP, MIXIN Y EXTEND
    
    Definidos en archivo css/partials/_variables.scss
        Variables: colores, border, transiciones
        Map: family fonts
        Mixin: animaciones; color y background color
        Extend: display flex, titulos 


#### FOR

        (Archivo: Página: elementos superiores → elemento aplicado)
        _animaciones.scss: Recetas: .bloque_recetas .row → .anima_n 
    


### CSS


#### TRANSICIONES

    · Definidas en variables "$transition_start" para inicio de hover, y "$transition_end" al retirar el cursor

        (Archivo: Página: elementos superiores → elemento aplicado)
        _bloques.scss: Inicio: .index_novedades article a → h3 y p.info
        _bloques.scss: Recursos: .bloque_recursos article → a
        _bloques.scss: Contacto: .bloque_contacto form → .form_elementos (input y textarea), y .form_button (buttons)
        _menu-aside.scss: Todas (<768px): header nav collapse .menu_lista li → a
        _menu-aside.scss: Todas (<768px): header nav collapse .redes_sociales li a → img
        _modal.scss: .modal-content .modal-body → button
        _responsive.scss: Todas (>768px): header nav .menu_lista_2 li → a
        _responsive.scss: Todas (>768px): main .redes_sociales_2 ul li a → img y a::after


#### TRANSFORM

        (Archivo: Página: elementos superiores → elemento aplicado)
        _responsive.scss: Todas (>768px): header nav .menu_lista_2 li → a
        _responsive.scss: Todas (>768px): main .redes_sociales_2 ul li a → img y a::after
        _animaciones.scss: Inicio, Recetas: fade_scale
        _animaciones.scss: Inicio, Recetas: fade_slide
        
        
#### ANIMACIONES
        
        (Archivo: Página: → elementos superiores → elemento → animación)
        
        --- CSS ---
        _animaciones.scss: Inicio: main bloque_mayor .index_welcome → img (fade_scale)
        _animaciones.scss: Inicio: main bloque_mayor .index_welcome → .talkbubble (fade_slide)
        _animaciones.scss: Recetas: main bloque_mayor .bloque_recetas .row → .anima_n (fade_scale)
        
        --- Libreria AOS (zoom-in-up) ---
        Recursos.html: Recursos: main bloque_mayor .bloque_recursos → article
        
        --- Animista (fade-in-bottom) ---
        Contacto.html, _animaciones.scss: Contacto: main bloque_mayor .bloque_contacto → form

    
#### PSEUDOELEMENTOS Y PSEUDOCLASES

        (Archivo: Página: → elementos superiores → elemento aplicado)
        _bloques.scss → .index_welcome → .talkbubble::after
        _bloques.scss → Recursos: .bloque_recursos article → nth-child en h3 y a
        _modal.scss → Recetas: .bloque_recetas .modal #recetas_carnes ... .modal_item → li:last-child
        
        
#### FUENTES IMPORTADAS

        Importadas en archivo css/partials/_variables.scss
        google fonts: crimson text, nunito, open sans,
        font-face: hight tower
        
        
#### MEDIA QUERY
        First mobile: base de 320px
        Puntos de corte: 375px, 575px, 768px, 992px, 1200px, 1400px 


### BOOTSTRAP

        (Página: → elemento principal usado)
        Todas → container-fluid
        Recetas → cards, button, badge, modal x 2 (recetas y construcción)
        Recursos → modal
        Simulacro_envio → elemento <a> con estilo de button
