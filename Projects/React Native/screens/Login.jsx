import { useState } from "react";
import { useLoginMutation } from "../app/Service/userAuth";
import { loginSchema } from "../Validation/authSchema";
import { setUser } from "../features/Auth/AuthSlice";
import { useDispatch } from "react-redux";
import ErrorMsg from "../components/Elements/ErrorMsg";
import FormInput from "../components/Elements/FormInput";
import FormButton from "../components/Elements/FormButton";
import FormContainer from "../components/Elements/FormContainer";
import FormLinks from "../components/Elements/FormLinks";
import LoadingMsg from "../components/Elements/LoadingMsg";
import { saveUserSession } from "../db";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [triggerLogin] = useLoginMutation();

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      loginSchema.validateSync({ email, password });
      const { data } = await triggerLogin({ email, password });

      // SQLite
      await saveUserSession(data.localId, data.email, data.idToken);

      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        }),
      );
      navigation.navigate("Tabs");

      setIsLoading(false);
    } catch (error) {
      setErrorEmail("");
      setErrorPassword("");

      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          break;
        case "password":
          setErrorPassword(error.message);
          break;
        default:
          break;
      }
      if (error.data?.error) {
        setLoginError(error.data.error);
      } else {
        setLoginError("El usuario o la contraseña no son correctos");
        console.log(error);
        setTimeout(() => {
          setLoginError("");
        }, 2000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
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

      <FormButton fx={onSubmit} text="Ingresar" icon={true} iconName="login" />
      {isLoading && <LoadingMsg />}
      {loginError && <ErrorMsg error={loginError} />}

      <FormLinks
        fx={() => navigation.navigate("Registrarse")}
        text="No tienes usuario? aquí puedes registrarte"
      />
    </FormContainer>
  );
};

export default Login;
