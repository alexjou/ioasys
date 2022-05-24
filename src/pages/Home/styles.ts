import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.theme.background,
  },
  firstView: {
    padding: 15,
    paddingTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  firstTextView: {
    fontSize: 35,
    color: Colors.theme.title,
    fontWeight: 'bold',
    paddingRight: 20,
  },
  seccondTextView: {
    fontSize: 25,
    color: Colors.theme.title,
  },
})