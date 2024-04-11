import { Platform, Pressable, StatusBar, StyleSheet, View } from "react-native";
import Logo from "./Logo";
import Title from "./Title";
import { globalColor } from "../../global/globalStyles";
import Icons from "../Elements/Icons";
const TopBar = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      {navigation.canGoBack() && 
                <Pressable onPress={()=>navigation.goBack()}>
                    <Icons refer={"chevron-left"} size={32} color={globalColor.midLight}/>
                </Pressable>}
      <Logo flexWidth={1} />
      <Title flexWidth={3} title={title } />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",    
    backgroundColor: globalColor.midDark,
    paddingVertical:15,
    paddingHorizontal:5,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    borderBottomWidth:1,
    borderBlockColor: globalColor.midLight
  }
});
