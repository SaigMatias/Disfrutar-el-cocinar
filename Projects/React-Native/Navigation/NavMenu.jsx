import { View } from "react-native";
import NavElement from "./NavElement";

const NavMenu = ({ navigation, isHome, isContacts, isUser }) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <NavElement
        refer="home"
        isActive={isHome}
        fx={() => {
          navigation.navigate("Inicio");
        }}
      >
        Inicio
      </NavElement>
      <NavElement
        refer="book"
        isActive={isContacts}
        fx={() => {
          navigation.navigate("Contactos");
        }}
      >
        Agenda
      </NavElement>
      <NavElement
        refer="user"
        isActive={isUser}
        fx={() => {
          navigation.navigate("Mis datos");
        }}
      >
        Usuario
      </NavElement>
    </View>
  );
};

export default NavMenu;
