import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { setImageCam } from "../features/Auth/AuthSlice";
import { useSetProfileImageMutation } from "../app/Service/userProfileApi";
import FormButton from "../components/Elements/FormButton";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.auth);
  const localId = user.localId;
  const [triggerProfileImage] = useSetProfileImageMutation();
  const dispatch = useDispatch();

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (granted) {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [6, 4],
        quality: 0.3,
        base64: true,
      });

      if (!result.canceled) {
        setImage("data:image/jpeg;base64," + result.assets[0].base64);
      }
    }
  };

  const saveImage = async () => {
    dispatch(setImageCam(image));
    await triggerProfileImage({ localId, image });
    navigation.goBack();
  };

  return (
    <View>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.preview} />

          <FormButton
            fx={pickImage}
            text="Tomar otra foto"
            icon={true}
            iconName="camera"
          />

          <FormButton
            fx={saveImage}
            text="Guardar"
            icon={true}
            iconName="download"
          />
        </>
      ) : (
        // foto generica
        <FormButton
          fx={pickImage}
          text="Tomar foto"
          icon={true}
          iconName="camera"
        />
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  preview: {
    width: 128,
    height: 128,
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 30,
  },
});
