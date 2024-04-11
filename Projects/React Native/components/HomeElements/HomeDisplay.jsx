import { StyleSheet, Text, View } from "react-native";
import { globalColor } from "../../global/globalStyles";
import fonts from "../../global/fonts";
const HomeDisplay = ({ balance }) => {
  return (
    <View style={styles.containerDisplay}>
        <Text style={[styles.coin, styles.text]}>
          ${balance}
        </Text>
      <Text style={[styles.textDetail, styles.text]}>Dinero disponible</Text>
    </View>
  );
};

export default HomeDisplay;

const styles = StyleSheet.create({
  containerDisplay: {
    marginTop: 10,
    marginBottom:20,
  },
  text: {
    fontFamily: fonts.serif,
    fontWeight: "bold",
  },
  textDetail: {
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
    color: globalColor.midLight,
  },
  coin: {
    fontSize: 46,
    color: globalColor.lowLight,
    textAlign:"center"
  }
});
