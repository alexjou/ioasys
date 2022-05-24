import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import Colors from "../../constants/Colors";

export default function Webview({ navigation }) {  
  return (
    <>
      <SafeAreaView style={{
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: 'white'
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color={Colors.theme.gray} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={{
          width: '65%',
          fontSize: 20,
          marginLeft: 35,
          fontWeight: "bold",
          textAlign: "left",
        }}>
          FAQ
        </Text>
      </SafeAreaView>
      <WebView style={{ marginTop: "-20%" }} source={{ uri: "https://ioasys.com.br/" }} />
    </>
  );
}
