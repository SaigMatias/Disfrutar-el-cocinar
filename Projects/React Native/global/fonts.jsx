import { Platform } from "react-native"

export const fontsCollection = {
    "crimson":require("../assets/fonts/CrimsonPro-Variable.ttf"),
    "inter":require("../assets/fonts/Inter-Variable.ttf"),
    "spartan":require("../assets/fonts/LeagueSpartan-Variable.ttf"),
    "baskerville":require("../assets/fonts/LibreBaskerville-Regular.ttf"),
  }
  
  // android font fallback
  const fonts = Platform.select({
    web: {
      title: "baskerville, crimson, serif",
      serif: "crimson, serif",
      sans: "spartan, inter, sans-serif"
    },
    android: {
      title: "serif",
      serif: "serif",
      sans: "sans-serif"
    }
  })

  export default fonts
