import { Pressable, StyleSheet, Text } from "react-native";
import { globalColor, globalStyles } from "../../global/globalStyles";
import Icons from "./Icons";
const SessionButton = ({ fx, text, icon = false, iconName, close = false, del=false }) => {
 
    const bgClose = close ? globalColor.error : globalColor.detailLight
    const textClose = close ? globalColor.highLight : globalColor.midDark
    const bgDelete = del && globalColor.lowLight
    const styles = StyleSheet.create({
    sendButton: {
      backgroundColor: bgClose,
    },
    deleteButton: {
      backgroundColor: bgDelete,
    },
    button: {
      width: "80%",
      alignSelf: "center",
      elevation: 3,
      marginBottom: 20,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    },
    sendText: {
      color: textClose,
      fontSize: 16,
      textAlign: "center",
    },
  });

  return (
    <Pressable
      onPress={fx}
      style={[globalStyles.buttons, del ? styles.deleteButton : styles.sendButton, styles.button]}
    >
      <Text style={[globalStyles.buttonsText, styles.sendText]}>
        {text}     
        </Text>
        {icon && (
          <Icons
            refer={iconName}
            size={14}
            color={textClose}
            styleAdd={{marginLeft:5}}
          />
        )}
    </Pressable>
  );
};

export default SessionButton;
