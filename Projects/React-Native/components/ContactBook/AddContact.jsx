import { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import CustomModal from "../CustomModal/CustomModal";
import { globalColor, globalStyles } from "../../global/globalStyles";
import { useSelector } from "react-redux";
import { useNewContactMutation } from "../../app/Service/userContactsApi";
import LoadingMsg from "../Elements/LoadingMsg";
const AddContact = ({ ids }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Modal
  const [toggleModal, setToggleModal] = useState(false);

  // Redux
  const user = useSelector((state) => state.auth);

  // Firestore
  const [triggerNewContact] = useNewContactMutation();

  const [newContact, setNewContact] = useState({
    id: "",
    name: "",
    nickname: "",
    bank: "",
    cbu: "",
    alias: "",
  });

  // newId
  useEffect(() => {
    if (ids !== undefined) setNewContact({ ...newContact, id: ids + 1 });
  }, [ids]);

  // addContact
  const addNewContact = async () => {
    if (newContact.id < 2) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      await triggerNewContact({
        userId: user.localId,
        newContact,
        idx: newContact.id - 1,
      });
      setToggleModal(!toggleModal);
    }
  };

  return (
    <CustomModal
      openButtonText={"Agendar contacto"}
      openStyle={({ pressed }) => [
        pressed ? styles.sendButtonPress : styles.sendButton,
        globalStyles.buttons
      ]}
      openTextStyle={[globalStyles.buttonsText, styles.sendText]}
      toggleModal={toggleModal}
      setToggleModal={setToggleModal}
    >
      <ScrollView style={styles.scroll}>
        <View style={globalStyles.containerCenter}>
          <Text style={globalStyles.inputLabel}>Nombre y apellido</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={(text) =>
              setNewContact({ ...newContact, name: text })
            }
            value={newContact.name}
            placeholder="Nombre"
          />

          <Text style={globalStyles.inputLabel}>Apodo</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={(text) =>
              setNewContact({ ...newContact, nickname: text })
            }
            value={newContact.nickname}
            placeholder="Apodo"
          />

          <Text style={globalStyles.inputLabel}>Banco</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={(text) =>
              setNewContact({ ...newContact, bank: text })
            }
            value={newContact.bank}
            placeholder="Banco"
          />

          <Text style={globalStyles.inputLabel}>CBU</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={(text) => setNewContact({ ...newContact, cbu: text })}
            value={newContact.cbu}
            placeholder="Cbu"
            inputMode="numeric"
          />

          <Text style={globalStyles.inputLabel}>Alias</Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={(text) =>
              setNewContact({ ...newContact, alias: text })
            }
            value={newContact.alias}
            placeholder="Alias"
          />

          <Text style={[globalStyles.inputLabel, { alignSelf: "flex-end" }]}>
            Contacto nº {newContact.id}
          </Text>

          <View style={styles.buttonsContainer}>
            <Pressable
              onPress={() => setToggleModal(!toggleModal)}
              style={({ pressed }) => [
                pressed ? styles.retryButtonPress : styles.retryButton,
                globalStyles.buttons,
                styles.button,
              ]}
            >
              <Text
                style={[
                  globalStyles.buttonsText,
                  styles.sendText,
                  styles.retryText,
                ]}
              >
                Cancelar
              </Text>
            </Pressable>
            <Pressable
              onPress={addNewContact}
              style={({ pressed }) => [
                pressed ? styles.sendButtonPress : styles.sendButton,
                globalStyles.buttons,
                styles.button,
              ]}
            >
              <Text style={[globalStyles.buttonsText, styles.sendText]}>
                Agendar
              </Text>
            </Pressable>
          </View>

          {isLoading && <LoadingMsg />}
        </View>
      </ScrollView>
    </CustomModal>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  sendButton: {
    backgroundColor: globalColor.detailLight,
  },
  sendButtonPress: {
    backgroundColor: globalColor.highShadow,
  },
  retryButton: {
    backgroundColor: globalColor.midShadow,
  },
  retryButtonPress: {
    backgroundColor: globalColor.error,
  },
  retryText: {
    color: globalColor.highShadow,
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
  scroll: {
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 20,
  },
});
