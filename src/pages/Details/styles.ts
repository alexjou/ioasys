import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 19,
    backgroundColor: Colors.theme.white,
  },
  image: {
    width: 240,
    height: 351,
    marginBottom: 20
  },
  content: {
    flex: 1,
    margin: 30,
    justifyContent: "center",
  },
  firstText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: Colors.theme.title,
  },
  title: {
    paddingTop: 5,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 20,
    color: Colors.theme.title,
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.theme.default,
  },
  seccondTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    color: Colors.theme.title,
    paddingBottom: 5,
  },
  seccondText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.theme.title,
    padding: 5,
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.theme.title,
    padding: 5,
    textAlign: "left",
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.theme.title,
  },
  containerDetail: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})