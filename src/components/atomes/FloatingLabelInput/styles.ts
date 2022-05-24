import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export default StyleSheet.create({

  container: {
    paddingTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 30,
    width: '90%',
    fontSize: 16,
    color: Colors.theme.white,
  },
  buttonShow: {
    fontSize: 12,
    color: Colors.theme.default,
    fontWeight: '700'
  }
});
