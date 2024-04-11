import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";


export const ContactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    deleteContact: (state, action) => {
       const index = state.findIndex(
        (account) => account.id === action.payload.id,
      );
      state.splice(index, 1); 
      Alert.alert(`Contacto borrado: \n${action.payload.name} ${action.payload.lastname}`); 
    },
    addContact: (state, action) => {
      state.unshift(action.payload);
      Alert.alert(`Contacto agregado: \n${action.payload.name} ${action.payload.lastname}`); 
    },
  },
});

export const { addContact, deleteContact } = ContactsSlice.actions;
export default ContactsSlice.reducer;
