import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerContent: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 250,
    backgroundColor: "white",
  },
  firstText: {
    fontSize: 20,
    textAlign: 'center'
  },
  viewButtons: {
    flexDirection: 'row',
    marginTop: 30,
  },
  buttonAccess: {
    marginRight: 20,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: Colors.theme.default,
  },
  button: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: Colors.theme.default,
  },
  text: {
    color: Colors.theme.white,
    fontSize: 16
  }
});
