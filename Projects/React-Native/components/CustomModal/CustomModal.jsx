import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalColor } from "../../global/globalStyles";
const CustomModal = ({
  children,
  openStyle,
  openButtonText,
  openTextStyle,
  toggleModal,
  setToggleModal,
}) => {
  
  return (
    <>
      <Modal
        animationType="slide"
        visible={toggleModal}
        onRequestClose={() => {
          setToggleModal(!toggleModal);
        }}
      >
        <View style={styles.centered}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setToggleModal(!toggleModal)}
            >
              <Text style={styles.buttonTextClose}> x </Text>
            </TouchableOpacity>

            {children}
          </View>
        </View>
      </Modal>

      <Pressable
        style={openStyle}
        onPress={() => setToggleModal(true)}
      >
        <Text style={openTextStyle}>{openButtonText}</Text>
      </Pressable>
    </>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(25,25,25,0.8)",
  },
  modalContainer: {
    margin: 20,
    backgroundColor: globalColor.midLight,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "95%",
  },
  buttonClose: {
    alignSelf: "flex-end",
    backgroundColor: globalColor.error,
    width: 24,
    height: 24,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonTextClose: {
    textAlign: "center",
    color: globalColor.white,
  },
});
