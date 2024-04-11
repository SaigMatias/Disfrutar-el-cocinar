import { StyleSheet, View } from "react-native";
import { globalStyles } from "../../global/globalStyles";
const FormContainer = ({ children }) => {
  return (
    <View style={[globalStyles.containerCenter, styles.form]}>{children}</View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  form: {
    marginVertical: 20,
    alignItems: "center",
  },
});
