import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  SafeAreaView,
  Dimensions,
} from "react-native";
import * as yup from "yup";

import Logo from "../../components/images/bgimage.png";
import AuthContext from "../../contexts/auth";
import { LoadingIndicator } from "../../components/molecules/Loading";
import { FloatingLabelInput } from "../../components/atomes/FloatingLabelInput";
import ModalLogin from "../../components/ModalLogin";
import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from "@react-navigation/core";
interface Form {
  email: string;
  password: string;
}

export default function Login() {
  const navigation = useNavigation()
  const { user, signIn, authenticated } = useContext(AuthContext);

  const [isSubmiting, setSubmiting] = useState(false);
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
  });
  // const [form, setForm] = useState<Form>({
  //   email: "desafio@ioasys.com.br",
  //   password: "12341234",
  // });
  const [showModal, setShowModal] = useState(false);

  const [validation, setValidation] = useState<Form>({
    email: "",
    password: "",
  });

  async function onLoginPress() {
    setSubmiting(true);
    try {
      if (form.email !== "" || form.password !== "") {
        const isValidForm = await validateForm(form, setValidation);
        if (isValidForm) {
          NetInfo.fetch().then(async (state) => {
            if (!state.isConnected) {
              setSubmiting(false);
              Alert.alert(
                "Falha ao conectar",
                "Você não possui conexão com a internet",
                [{ text: "OK", onPress: () => null }]
              );
            } else {
              const verify = await signIn(form.email, form.password);
              if (verify) {
                setSubmiting(false);
                navigation.navigate("Home");
              } else {
                setSubmiting(false);
                setValidation({
                  email: "",
                  password: "Seu e-mail ou senha estão incorretos",
                });
              }
            }
          });
        }
        setSubmiting(false);
      } else {
        setValidation({
          email: "Campo obrigatório",
          password: "Campo obrigatório",
        });
        setSubmiting(false);
      }
    } catch (error: any) {
      console.log({ error });
      const badCredentials = error.response.data.error;

      if (badCredentials) {
        setValidation({ email: badCredentials, password: badCredentials });
      }
      setSubmiting(false);
    }
  };

  useEffect(() => {
    authenticated && navigation.navigate("Home")
  }, [authenticated])

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Logo} resizeMode="cover" style={styles.image} >

        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
          <Text style={styles.firstTextView}>ioasys</Text>
          <Text style={styles.seccondTextView}>Books</Text>
        </View>

        <View style={Dimensions.get("window").width > 500 && styles.viewTablet}>
          <View style={!!validation?.email ? styles.inputError : styles.input}>
            <FloatingLabelInput
              label="E-mail"
              text={form.email}
              value={form.email}
              returnKeyType="next"
              autoCapitalize={"none"}
              keyboardType={"email-address"}
              error={!!validation?.email ? true : false}
              onChangeText={(email) => setForm({ ...form, email })}
            />
          </View>

          {!!validation?.email && (
            <Text style={styles.validation}>{validation?.email}</Text>
          )}

          <View style={!!validation?.password ? styles.inputError : styles.input}>
            <FloatingLabelInput
              error={!!validation?.password ? true : false}
              label="Senha"
              secureText={true}
              text={form.password}
              value={form.password}
              returnKeyType="send"
              autoCapitalize={"none"}
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>


          {!!validation?.password && (
            <Text style={styles.validation}>{validation?.password}</Text>
          )}

          <TouchableOpacity
            onPress={onLoginPress}
            style={styles.submitButton}
            disabled={isSubmiting}
          >
            <LoadingIndicator isLoading={isSubmiting} />
            {!isSubmiting && <Text style={styles.submitText}>Entrar</Text>}
          </TouchableOpacity>
        </View>
        <ModalLogin show={showModal} setShowModal={setShowModal} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const validateForm = async (
  form: Form,
  setValidation: (validation: Form) => void
) => {
  try {
    const schema: yup.SchemaOf<Form> = yup.object().shape({
      email: yup
        .string()
        .required("Campo obrigatório")
        .email("O e-mail possui formato inválido"),
      password: yup
        .string()
        .required("Campo obrigatório")
        .min(8, "A senha deve ter no mínimo 8 caracteres"),
    });

    await schema.validate(form);
    setValidation({ email: "", password: "" });
    return schema.isValid(form);
  } catch (error) {
    /* @ts-ignore */
    setValidation({ [error.path]: error.message });
  }
};
