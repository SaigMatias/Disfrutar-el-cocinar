import { Pressable, StyleSheet, Text } from "react-native";
import { globalColor } from "../../global/globalStyles";
import Icons from "../Elements/Icons";
const HomeButtonCard = () => {
  return (
    <Pressable disabled style={styles.buttonStructure}>
    <Icons refer="v-card" size={32} color={globalColor.highLight}/>
      <Text style={styles.buttonStructureText}>Tarjetas</Text>
    </Pressable>
  );
};

export default HomeButtonCard;

const styles = StyleSheet.create({
    buttonStructure: {
        backgroundColor: globalColor.midLight,
        padding:10,
        borderRadius: 10,
        marginVertical:10,
        flexDirection:"row",
        alignItems:"center",
        gap:10
      },
      buttonStructureText: {
        fontSize: 14,
        letterSpacing:1,
        fontWeight:"bold",
        color: globalColor.highLight
      },
});
