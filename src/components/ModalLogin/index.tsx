import React, { useState } from "react";
import { Button, Linking, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";

function ModalLogin({ show, setShowModal }) {
  return (
    <View>
      <Modal
        isVisible={show}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
      >
        <View style={styles.container}>
          <View style={styles.containerContent}>
            <Text style={styles.firstText}>
              Você precisa completar o cadastro no site primeiro
            </Text>
            <View style={styles.viewButtons}>
              <TouchableOpacity
                style={styles.buttonAccess}
                onPress={() =>
                  Linking.openURL("https://www.flix.com.vc/#emergencial")
                }
              >
                <Text style={styles.text}>Acessar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.text}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalLogin;
