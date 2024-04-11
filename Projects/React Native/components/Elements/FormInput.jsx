import { Text, TextInput } from "react-native";
import { globalStyles } from "../../global/globalStyles";

const FormInput = ({ label, fx, value, place, password }) => {
  return (
    <>
      <Text style={globalStyles.inputLabel}>{label}</Text>

      <TextInput
        style={globalStyles.input}
        onChangeText={(text) => {
          fx(text);
        }}
        value={value}
        placeholder={place}
        secureTextEntry={password}
      />
    </>
  );
};

export default FormInput;
