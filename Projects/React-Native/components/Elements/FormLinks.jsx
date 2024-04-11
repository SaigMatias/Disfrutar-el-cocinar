import { Pressable, StyleSheet, Text } from "react-native";
import { globalColor, globalStyles } from "../../global/globalStyles";
const FormLinks = ({ fx, text }) => {
  return (
    <Pressable onPress={fx}>
      <Text style={[globalStyles.paragraph, styles.link]}>{text}</Text>
    </Pressable>
  );
};

export default FormLinks;

const styles = StyleSheet.create({
  link: {
    color: globalColor.alert,
    marginTop: 20,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderBottomColor: globalColor.detailDark,
  },
});
