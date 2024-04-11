import { Image, StyleSheet, View } from "react-native";
import { globalStyles } from "../../global/globalStyles";

const Logo = ({ flexWidth }) => {
  const styles = StyleSheet.create({
    logo: {
      height: 48,
      width: 48,
      opacity: 0.8,
    },
    logoContainer: {
      flex: flexWidth,
      alignItems: "center",
    },
  });

  return (
    <View style={[styles.logoContainer, globalStyles.containerCenterFull]}>
      <Image
        style={styles.logo}
        source={require("../../assets/img/Logo/logoClassicPocket.png")}
      />
    </View>
  );
};

export default Logo;
