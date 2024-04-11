import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { globalColor, globalStyles } from "../../global/globalStyles";
import { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import { useDeleteContactMutation } from "../../app/Service/userContactsApi";
import { useSelector } from "react-redux";
const RemoveContact = ({ contactName, contactId }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const user = useSelector((state) => state.auth);

  const userId = user.localId;
  const [triggerDelete] = useDeleteContactMutation();
  const contactIndex = contactId - 1;

  const handleDeleteContact = async () => {
    await triggerDelete({ userId, contactIndex });
    setToggleModal(!toggleModal);
    console.log("contacto eliminado");
  };

  return (
    <>
      <CustomModal
        openButtonText={"Borrar"}
        openStyle={({ pressed }) => [
          pressed ? styles.buttonTrashPress : styles.buttonTrash,
          globalStyles.buttons
        ]}
        openTextStyle={[globalStyles.buttonsText, styles.buttonTextTrash]}
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      >
        <Text style={[globalStyles.paragraph, styles.modalText]}>
          ¿Quieres borrar el contacto de
          <Text style={styles.spanDelete}> {contactName} </Text>
          de la agenda? Una vez hecho no se puede deshacer
        </Text>

        <TouchableOpacity
          onPress={handleDeleteContact}
          style={[globalStyles.buttons, styles.buttonTrash]}
        >
          <Text style={[globalStyles.buttonsText, styles.buttonTextTrash]}>
            borrar contacto
          </Text>
        </TouchableOpacity>
      </CustomModal>
    </>
  );
};

export default RemoveContact;

const styles = StyleSheet.create({
  spanDelete: {
    fontWeight: "bold",
  },
  buttonTrash: {
    backgroundColor: globalColor.error,
    width: "40%",
    opacity: 0.8,
    marginTop: 30,
  },
  buttonTrashPress: {
    backgroundColor: globalColor.midShadow,
    width: "40%",
    opacity: 0.8,
    marginTop: 30,
  },
  buttonTextTrash: {
    color: globalColor.white,
    textAlign: "center",
  },
  modalText: {
    color: globalColor.lowDark,
    fontSize: 16,
  },
});
