import React, { Component, useState } from "react";
import {
  View,
  StatusBar,
  TextInput,
  Text,
  TouchableOpacity,
  PixelRatio,
  Image,
  Dimensions,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Colors from "../../../constants/Colors";
import styles from "./styles";
import EyeOn from "../../images/eyeOn.png";
import EyeOff from "../../images/eyeOff.png";

export class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
    pwd: true,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });
  handlePwdFalse = () => this.setState({ pwd: false });
  handlePwdTrue = () => this.setState({ pwd: true });

  render() {
    const {
      label,
      text,
      edit,
      secureText,
      maskCell,
      maskCpf,
      maskDate,
      maskZipCode,
      error,
      style,
      ...props
    } = this.props;
    const { isFocused, pwd } = this.state;

    const labelStyle = {
      position: "absolute",
      left: 0,
      top: isFocused || text ? 0 : 12,
      fontSize:
        Dimensions.get("window").width < 390 ? 14 : isFocused || text ? 14 : 16,
      color: error
        ? Colors.theme.red_error
        : edit == false
          ? Colors.theme.gray_border
          : Colors.theme.white,
    };
    return (
      <View style={styles.container}>
        <Text style={labelStyle}>{label}</Text>
        {!maskZipCode ?
          !maskCpf ?
            !maskCell ? (
              !maskDate ? (
                !secureText ? (
                  <TextInput
                    {...props}
                    style={style ? style : styles.input}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    blurOnSubmit
                  />
                ) : (
                  <TextInput
                    {...props}
                    style={style ? style : styles.input}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    blurOnSubmit
                    secureTextEntry={pwd}
                  />
                )
              ) : (
                <TextInputMask
                  {...props}
                  style={style ? style : styles.input}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  blurOnSubmit
                  type={"datetime"}
                  options={{
                    format: "DD/MM/YYYY",
                  }}
                />
              )
            ) : (
              <TextInputMask
                {...props}
                style={styles.input}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                blurOnSubmit
                type={"cel-phone"}
                options={{
                  maskType: "BRL",
                  withDDD: true,
                  dddMask: "99 ",
                }}
              />
            ) : (
              <TextInputMask
                {...props}
                style={styles.input}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                blurOnSubmit
                type={'cpf'}
              />
            )
          :
          (<TextInputMask
            {...props}
            style={styles.input}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            blurOnSubmit
            type={'zip-code'}
          />)}

        {secureText && (
          <TouchableOpacity
            onPress={pwd ? this.handlePwdFalse : this.handlePwdTrue}
          >
            <View style={{ bottom: "20%" }}>
              {!pwd ? <Image source={EyeOff} /> : <Image source={EyeOn} />}
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
