import { Text, View } from "react-native";
import Icons from "./Icons";
import { globalColor, globalStyles } from "../../global/globalStyles";
const ErrorMsg = ({ error }) => {
  return (
    <>
      {error && (
        <View
          style={[globalStyles.msgContainer, globalStyles.msgTextContainer]}
        >
          <Icons
            refer="info-with-circle"
            size={16}
            color={globalColor.error}
            styleAdd={{ marginRight: 10 }}
          />
          <Text style={[globalStyles.msg, globalStyles.msgError]}>{error}</Text>
        </View>
      )}
    </>
  );
};

export default ErrorMsg;
