# Disfrutar-el-cocinar
Sitio web creado con Html, CSS y Bootstrap


## SCSS


### Estructura de directorios

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


### Orden de importación


    css/partials/variables
    css/partials/reset
    css/partials/contenedores
    css/partials/header
    css/partials/menu-aside
    css/partials/bloques
    css/partials/modal
    css/partials/footer
    css/partials/animaciones
    css/partials/responsive


### FOR
        (Archivo: Página: elementos superiores → elemento aplicado)
        _animaciones.scss: Recetas: .bloque_recetas .row → .anima_n 
    

## TRANSICIONES

    · Definidas en variables "$transition_start" para inicio de hover, y "$transition_end" al retirar el cursor
    · Aplicado a estos elementos: 
        (Archivo: Página: elementos superiores → elemento aplicado)
        _bloques.scss: Inicio: .index_novedades article a → h3 y p.info
        _bloques.scss: Recursos: .bloque_recursos article → a
        _bloques.scss: Contacto: .bloque_contacto form → .form_elementos (input y textarea), y .form_button (buttons)
        _menu-aside.scss: Todas (<768px): header nav collapse .menu_lista li → a
        _menu-aside.scss: Todas (<768px): header nav collapse .redes_sociales li a → img
        _responsive.scss: Todas (>768px): header nav .menu_lista_2 li → a
        _responsive.scss: Todas (>768px): main .redes_sociales_2 ul li a → img
        
        
## ANIMACIONES
        
        (Archivo: Página: → elementos superior → elemento → animación)
        
        CSS
        _animaciones.scss: Inicio: main bloque_mayor .bloque_doble → h2, p, article (fade)
        _animaciones.scss: Recetas: main bloque_mayor .bloque_recetas .row → .anima_n (fade_scale)
        
        Libreria AOS (zoom-in-up)
        Recursos.html: Recursos: main bloque_mayor .bloque_recursos → article
        
        Animista (fade-in-bottom)
        Contacto.html, _animaciones.scss: Contacto: main bloque_mayor .bloque_contacto → form

    
