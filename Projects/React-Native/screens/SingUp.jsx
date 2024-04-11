import { useState } from "react";
import { useSignUpMutation } from "../app/Service/userAuth";
import { registerSchema } from "../Validation/authSchema";
import { setUser } from "../features/Auth/AuthSlice";
import { useDispatch } from "react-redux";
import FormInput from "../components/Elements/FormInput";
import ErrorMsg from "../components/Elements/ErrorMsg";
import FormButton from "../components/Elements/FormButton";
import FormContainer from "../components/Elements/FormContainer";
import { Alert } from "react-native";
import { useCreateUserMutation } from "../app/Service/userAccountApi";
import LoadingMsg from "../components/Elements/LoadingMsg";

const SingUp = ({ navigation }) => {
  const dispatch = useDispatch();
  
  // inputs
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [singUpError, setSingUpError] = useState("");

  // Firebase
  const [triggerRegister] = useSignUpMutation();
  const [triggerCreateUser] = useCreateUserMutation();

  const [isLoading, setIsLoading] = useState(false);


  const onSubmit = async () => {
    try {
      // Validate yup
      registerSchema.validateSync({
        userName,
        email,
        password,
        confirmPassword,
      });

      setIsLoading(true)

      // Firebase
      const { data } = await triggerRegister({ email, password });

      const localId = data.localId;
      const userAlias = userName.replace(/\s/g, "");

      // redux
      dispatch(
        setUser({
          name: userName,
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        }),
      );

      // Firebase
      await triggerCreateUser({
        newUserId: localId,
        userName,
        userEmail: email,
        userAlias,
      });
      Alert.alert("Usuario registrado!");
      navigation.navigate("Tabs")

    } catch (error) {
      console.log("error de registro", error);
      setErrorUserName("");
      setErrorEmail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      switch (error.path) {
        case "userName":
          setErrorUserName(error.message);
          break;
        case "email":
          setErrorEmail(error.message);
          break;
        case "password":
          setErrorPassword(error.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(error.message);
          break;
        default:
          break;
      }
      if (error.data?.error) {
        setSingUpError(error.data.error);
      } else {
        setSingUpError(
          "Este email ya se encuentra registrado en nuestra base de datos",
        );
      }
    } finally {
      setTimeout(() => {
        setSingUpError("");
      }, 2000);
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormInput
        label="Nombre de usuario"
        fx={setUserName}
        value={userName}
        place="Nombre"
      />
      <ErrorMsg error={errorUserName} />

      <FormInput label="Email" fx={setEmail} value={email} place="Email" />
      <ErrorMsg error={errorEmail} />

      <FormInput
        label="Contraseña"
        fx={setPassword}
        value={password}
        place="Contraseña"
        password={true}
      />
      <ErrorMsg error={errorPassword} />

      <FormInput
        label="Repetir contraseña"
        fx={setConfirmPassword}
        value={confirmPassword}
        place="Repetir contraseña"
        password={true}
      />
      <ErrorMsg error={errorConfirmPassword} />

      <FormButton fx={onSubmit} text="Registrarme" />
      {isLoading && <LoadingMsg />}
      {singUpError && <ErrorMsg error={singUpError} />}
    </FormContainer>
  );
};

export default SingUp;
