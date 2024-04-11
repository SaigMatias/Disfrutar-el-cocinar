import { FlatList, StyleSheet, Text, View } from "react-native";
import ContactDetail from "./ContactDetail";
import AddContact from "./AddContact";
import { globalColor } from "../../global/globalStyles";
import useContactsGet from "../../Hooks/useContactsGet";
import LoadingMsg from "../Elements/LoadingMsg";
import { useEffect, useState } from "react";

const OptimizedList = ({ navigation }) => {

  // customHook
  const { contacts, isError, isLoading, isFetching } = useContactsGet();
  
  // maxId
  const [maxId, setMaxId] = useState("");
  useEffect(() => {
    if (contacts !== undefined) {
      const last = contacts[contacts.length - 1];
      setMaxId(last?.id);
    }
  }, [contacts]);

  return (
    <View style={styles.list}>
      {isError && (
        <Text style={[styles.text, styles.error]}>Error de carga</Text>
      )}

      {isLoading || isFetching ? (
        <LoadingMsg />
      ) : (
        <>
          <AddContact contacts={contacts} navigation={navigation} ids={maxId} />
          <FlatList
            initialNumToRender={20}
            data={contacts}
            renderItem={({ item }) =>
              item !== null ? (
                <ContactDetail renderItem={item} />
              ) : (
                <View></View>
              )
            }
            keyExtractor={(item) => (item != null ? item.alias : Math.random())}
          />
        </>
      )}
    </View>
  );
};

export default OptimizedList;

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
    alignItems: "center",
    height: "100%",
    paddingBottom: 150,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
  loading: {
    color: globalColor.alert,
  },
  error: {
    color: globalColor.error,
  },
});
