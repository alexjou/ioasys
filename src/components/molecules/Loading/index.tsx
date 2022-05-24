import React, { Fragment, memo } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIndicator } from "react-native-indicators";
import Colors from "../../../constants/Colors";

interface LoadingIndicatorProps {
  color?: string;
  isLoading: boolean;
}

export const LoadingIndicator = memo((props: LoadingIndicatorProps) => {
  const { isLoading, color = Colors.theme.default } = props;

  return (
    <Fragment>
      {isLoading && (
        <View style={styles.container}>
          <MaterialIndicator size={20} color={color} />
        </View>
      )}
    </Fragment>
  )
})

const styles = StyleSheet.create({
  container: {
    height: 30,
  }
});