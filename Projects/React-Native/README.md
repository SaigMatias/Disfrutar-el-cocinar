# Classic Pocket
*Simulador de billetera virtual* - *Proyecto coderhouse, de curso de desarrollador de app*

Creado con 
<img src="./assets/logo-wordmark.png" style="height:16px; margin-left:1rem" />
<br /><br />

## Skills
- React Native
- Redux
- Firebase
- SQLite
<br />

## Device » camera
- screens/ImageSelector.jsx
<br />

## Firebase
- app/store.js » Configuración
- app/Service/userAccountApi.js » Cuenta de usuario
- app/Service/userAuth.js » Autorización de usuario
- app/Service/userContactsApi.js » Lista de contactos del usuario
- app/Service/userProfileApi.js » Perfil del usuario
<br />

## SQLite
- db/index.js » configuración
- app.jsx » initDatabase
- screens/Login.jsx » saveUserSession
- screens/About.jsx » deleteUserSession
- Navigation/ MainNavigator.jsx » getUserSession
<br />

## Verificaction (yup)
- Screens/Login.jsx
- Screens/SingUp.jsx
- Validation/AuthSchema.js
<br />

## Redux
Para obtener identificación del usuario
<br /><br />


## Navegación
- Navigation » ScreensNavigation.jsx
- Screen Stacks » Login.jsx, ScreensTabs.jsx 
- Screen Tabs » ScreensTabs.jsx » Home.jsx, ContactBook.jsx, About.jsx
- Title props » ScreensNavigaation.jsx » TopBar.jsx » "Classic Pocket", "Contactos", "Mis Datos"
- Navigation props » GoBack() » TopBar.jsx
- Navigation props » popToTop() » ContactBook.jsx » OptimizedList.jsx » AddContact.jsx
- Navigation props » navigate() » NavMenu.jsx
<br />

## Custom Hook
- Hooks » useContactsGet » Lista de contactos
- Hooks » useProfileGet » Perfil de usuario
- Hooks - useSessionGet » Datos de usuario
<br />

## Switch condicional
- En login
- En tabs de inicio y agenda
<br />

## Fuentes importadas
- Inter
- CrimsonPro
- LibreBaskerville
- LeagueSpartan
<br />

## Elementos usados
- Material Top Tabs Navigator
- Alert » aviso de contacto agregado o borrado (Android)
- FlatList » OptimizedList.jsx
- Image
- Modal » CustomModal (componente personalizado) » para agregado y borrado de contacto
- ScrollView » en CustomModal para agregar contacto
- StyleSheet
- Switch » para destacar contacto, cambia backgroundColor del container del contactDetail.jsx
- Text
- TextInput » AddContact.jsx
- TouchableHighlight
- TouchableOpacity
- useState » para almacenar datos de input, crear contacto y borrar contacto, y cambio de backgroundColor con switch
- View
<br />

# Estilos
- globalStyles » estilos globales
- globalColor » constantes de colores
<br /><br />

# Wireframe
<img src="/wirerame.jpg" style="margin: 10px auto " />
