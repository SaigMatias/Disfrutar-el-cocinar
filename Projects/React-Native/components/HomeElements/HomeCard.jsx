import { StyleSheet, Text, View } from "react-native";
import { globalColor } from "../../global/globalStyles";
const HomeCard = ({ category, detail, date, price, flow }) => {
  const flowVariant = flow === "in" ? globalColor.plus : globalColor.minus;
  const flowSing = flow === "in" ? "+" : "-";

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <Text style={[styles.detailText, styles.text, styles.category]}>
          {category}
        </Text>
        <Text style={[styles.text, styles.price, { color: flowVariant }]}>
          {flowSing} ${price}
        </Text>
      </View>

      <Text style={[styles.detailText, styles.text]}>{detail}</Text>
      <Text style={[styles.detailText, styles.text]}>{date}</Text>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColor.highLight,
    borderRadius: 7,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: globalColor.midShadow,
  },
  category: {
    color: globalColor.midDark,
    flex: 3,
  },
  price: {
    textAlign: "right",
    flex: 2,
  },
});
