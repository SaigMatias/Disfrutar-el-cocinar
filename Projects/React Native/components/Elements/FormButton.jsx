import { Pressable, StyleSheet, Text } from 'react-native'
import { globalColor, globalStyles } from '../../global/globalStyles'
import Icons from './Icons'
const FormButton = ({fx, text, icon=false, iconName}) => {
return (
    <Pressable
    onPress={fx}
    style={[globalStyles.buttons, styles.sendButton, styles.button]}
  >
    <Text style={[globalStyles.buttonsText, styles.sendText]}>
      {text}
      {icon && <Icons
            refer={iconName}
            size={14}
            color={globalColor.midShadow}
            styleAdd={{ marginLeft: 5 }}
          />}
    </Text>
  </Pressable> )
}

export default FormButton

const styles = StyleSheet.create({
    sendButton: {
        backgroundColor: globalColor.detailLight,
        marginBottom: 20,
      },
      button: {
        width: "40%",
        alignSelf: "center",
        elevation: 3,
        marginBottom: 10,
      },
      sendText: {
        color: globalColor.midDark,
        fontSize: 16,
        textAlign: "center",
      },
})