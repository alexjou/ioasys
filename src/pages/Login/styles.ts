import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  firstTextView: {
    fontSize: 35,
    color: Colors.theme.white,
    fontWeight: 'bold',
  },
  seccondTextView: {
    fontSize: 25,
    paddingLeft: 15,
    color: Colors.theme.white,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "30%",
    marginBottom: "5%",
  },
  subtitle: {
    marginHorizontal: '20%',
    fontSize: 16,
    textAlign: "center",
    marginBottom: "10%",
  },
  submitButton: {
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: Colors.theme.white,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    margin: 16,
    backgroundColor: "rgba(0, 0, 0, 0.32)",
    borderRadius: 4,
    height: 56,
  },
  inputError: {
    paddingHorizontal: 12,
    margin: 16,
    borderWidth: 1,
    borderColor: Colors.theme.red_error,
    borderRadius: 4,
    height: 56,
  },
  viewTablet: {
    width: '50%',
    alignSelf: 'center'
  },
  submitText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.theme.default,
  },
  buttonBack: {
    flexDirection: "row",
    alignItems: "center",
  },
  validation: {
    paddingLeft: 20,
    marginTop: -15,
    color: Colors.theme.red_error,
  },
  validationTrue: {
    paddingLeft: 20,
    color: Colors.theme.green,
  },
  forgotPassword: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.theme.default
  },
});
