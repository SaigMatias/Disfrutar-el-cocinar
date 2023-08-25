# Disfrutar-el-cocinar

## RESUMEN
Sitio web creado con Html, CSS y Bootstrap





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


### BOOTSTRAP

        (Página: → elemento principal usado)
        Todas → container-fluid
        Recetas → cards, modal x 2 (recetas y construcción), button
        Recursos → modal
        Simulacro_envio → button
