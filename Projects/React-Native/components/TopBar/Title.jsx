import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../global/globalStyles";

const Title = ({ flexWidth, title = "Classic Pocket", align = "left" }) => {
  const styles = StyleSheet.create({
    h1: {
      textAlign: align,
    },
    titleContainer: {
      flex: flexWidth,
      justifyContent: "center",
    },
  });

  return (
    <View style={[styles.titleContainer]}>
      <Text style={[globalStyles.title, styles.h1]}>{title}</Text>
    </View>
  );
};

export default Title;
