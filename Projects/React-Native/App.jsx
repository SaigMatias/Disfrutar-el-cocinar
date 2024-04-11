import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// Variables globales
import { globalColor, globalStyles } from "./global/globalStyles";

// Fuentes
import { useFonts } from "expo-font";
import { fontsCollection } from "./global/fonts";

// Screens
import MainNavigator from "./Navigation/MainNavigator";

// Store
import { store } from "./app/store";
import { Provider } from "react-redux";
import { initDatabase } from "./db";

// SQLite
initDatabase();

export default function App() {
  const [fontLoaded] = useFonts(fontsCollection);
  if (!fontLoaded) return null;

  return (
    <Provider store={store}>
      <View style={[globalStyles.BG, styles.container]}>
        <StatusBar
          animated={true}
          backgroundColor={globalColor.lowLight}
          style="light"
        />

        <MainNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignContent: "center",
  },
});
