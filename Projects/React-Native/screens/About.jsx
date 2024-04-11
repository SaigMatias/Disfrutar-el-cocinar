import { Image, StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import { globalColor } from "../global/globalStyles";
import { deleteUserSession } from "../db";
import SessionButton from "../components/Elements/SessionButton";
import { useDeleteUserMutation } from "../app/Service/userAccountApi";
import useProfileGet from "../Hooks/useProfileGet";
import LoadingMsg from "../components/Elements/LoadingMsg";

const About = ({ navigation }) => {
  const { isLoading, profile, isFetching } = useProfileGet();
  const [triggerDeleteUser] = useDeleteUserMutation();

  const image = profile?.image;

  return (
    <View style={styles.containerSup}>
      {isLoading || isFetching ? (
        <LoadingMsg />
      ) : (
        <>
          <Subtitle addStyle={styles.h2}>{profile?.name}</Subtitle>

          <Image
            source={
              image ? { uri: image } : require("../assets/img/user_avatar.png")
            }
            style={styles.avatar}
            resizeMode="cover"
          />

          <SessionButton
            fx={async () => {
              navigation.navigate("Foto de perfil");
            }}
            text="Cambiar foto de perfil"
            icon={true}
            iconName="camera"
          />

          <View style={styles.container}>
            <Text style={styles.subtitle}>CVU</Text>
            <Text style={styles.text}>{profile?.cvu}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subtitle}>Alias</Text>
            <Text style={styles.text}>{profile?.alias}</Text>
          </View>

          {/* SQLite */}
          <SessionButton
            fx={async () => {
              await deleteUserSession();
              navigation.navigate("Login");
            }}
            text="Cerrar sesión"
            icon={true}
            iconName="log-out"
            close={true}
          />

          {/*  Firebase */}
          <SessionButton
            fx={async () => {
              await triggerDeleteUser(profile.userId);
              navigation.navigate("Login");
            }}
            text="Borrar todos los datos"
            icon={true}
            iconName="cross"
            close={true}
            del={true}
          />
        </>
      )}
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  containerSup: {
    width: "80%",
    marginHorizontal: "10%",
  },
  container: {
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    flex: 1,
    color: globalColor.midDark,
  },
  h2: {
    fontSize: 36,
  },
  text: {
    fontSize: 18,
    color: globalColor.midLight,
    flex: 3,
    textTransform: "uppercase",
  },
  avatar: {
    alignSelf: "center",
    marginVertical: 20,
    width: 128,
    height: 128,
    borderRadius: 30,
  },
});
