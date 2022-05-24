import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    margin: 15,
    padding: 19,
    borderRadius: 10,  
    backgroundColor: Colors.theme.white,
  },
  image: {
    width: 81,
    height: 122,
  },
  content: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: "space-between",  
    marginLeft: 10
  },  
  firstText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: Colors.theme.title,
  },
  seccondText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.theme.default,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.theme.title,
  }
})