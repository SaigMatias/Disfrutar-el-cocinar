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
    
    

## TRANSICIONES

    · Definidas en variables "$transition_start" para inicio de hover, y "$transition_end" al retirar el cursor
    · Aplicado a estos elementos: 
        (Página: elementos superior → elemento aplicado)
        Inicio: .index_novedades article a → h3 y p.info
        Recursos: .bloque_recursos article → a
        Contacto: .bloque_contacto form → .form_elementos (input y textarea), y .form_button (buttons)
        Todas (<768px): header nav collapse .menu_lista li → a
        Todas (<768px): header nav collapse .redes_sociales li a → img
        Todas (>768px): header nav .menu_lista_2 li → a
        Todas (>768px): main .redes_sociales_2 ul li → a


    
