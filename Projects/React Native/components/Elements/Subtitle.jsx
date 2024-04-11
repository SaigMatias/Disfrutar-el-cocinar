import { Text } from "react-native";
import { globalStyles } from "../../global/globalStyles";
const Subtitle = ({children, addStyle}) => {
  return (
      <Text style={[globalStyles.subtitle, addStyle]}>{children}</Text>
  );
};

export default Subtitle;
