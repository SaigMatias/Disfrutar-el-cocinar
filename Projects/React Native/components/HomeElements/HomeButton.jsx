import { Pressable, StyleSheet, Text } from "react-native";
import { globalColor } from "../../global/globalStyles";
import Icons from "../Elements/Icons";
const HomeButton = ({ children, refer }) => {
  return (
    <Pressable disabled style={styles.buttonStructure}>
    <Icons refer={refer} size={24} color={globalColor.highLight}/>
      <Text style={styles.buttonStructureText}>{children}</Text>
    </Pressable>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
    buttonStructure: {
        flex: 1,
        backgroundColor: globalColor.midDark,
        paddingHorizontal:5,
        paddingVertical:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 10
      },
      buttonStructureText: {
        fontSize: 11,
        letterSpacing:1,
        fontWeight:"bold",
        textAlign:"center",
        color: globalColor.highLight
      },
});
