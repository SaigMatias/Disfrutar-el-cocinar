import { ActivityIndicator, Text, View } from "react-native";
import Icons from "./Icons";
import { globalColor, globalStyles } from "../../global/globalStyles";
const LoadingMsg = () => {
  return (
    <View style={globalStyles.msgContainer}>
      <ActivityIndicator size={64} color={globalColor.plus} />
      <View style={globalStyles.msgTextContainer}>
        <Icons
          refer="info-with-circle"
          size={24}
          color={globalColor.highDark}
          styleAdd={{ marginRight: 10 }}
        />
        <Text style={[globalStyles.msg, globalStyles.msgLoading]}>
          Cargando datos...
        </Text>
      </View>
    </View>
  );
};

export default LoadingMsg;
