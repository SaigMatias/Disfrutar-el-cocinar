import { globalColor } from "../global/globalStyles";
import { Pressable, StyleSheet, Text } from "react-native";

import Icons from "../components/Elements/Icons";

const NavElement = ({ refer, fx, children, isActive }) => {
  const styles = StyleSheet.create({
    button: {
      fontSize: 20,
      backgroundColor: isActive ? globalColor.lowShadow : globalColor.midDark,
      flex: 1,
      flexDirection:"row",
      paddingHorizontal: 5,
      paddingVertical: 15,
      alignItems:"center",
      justifyContent:"center",
      
    },
    color: {
      color: globalColor.midLight,
    },
    tabText: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold",
    },
  });

  return (
    <Pressable onPress={fx} style={[styles.button, styles.color]}>
      <Icons refer={refer} size={24} color={globalColor.midLight} />
      <Text style={[styles.tabText, styles.color]}> {children} </Text> 
    </Pressable>
  );
};

export default NavElement;
