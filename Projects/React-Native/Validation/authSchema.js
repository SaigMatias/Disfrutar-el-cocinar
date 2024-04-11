import { object, string, ref } from "yup";

export const registerSchema = object().shape({
  userName: string()
    .required("El nombre es obligatorio")
    .max(20, "El nombre no puede superar los 20 caracteres"),
  password: string()
    .required("Ingrese su contraseña")
    .min(6, "Minimo 6 caracteres")
    .max(20,"Máximo de 20 caracteres"),
  email: string()
    .required("Ingrese un email")
    .email("No es un mail valido, ej.: email@email.com"),
    confirmPassword: string()
    .required("La contraseña no coincide")
    .oneOf([ref("password"), null], "La contraseña no coincide"),
});

export const loginSchema = object().shape({
  password: string()
    .required("Ingrese su contraseña")
    .min(6, "Minimo 6 caracteres"),
  email: string()
    .required("Ingrese un email")
    .email("No es un mail valido, ej.: email@email.com"),
});
