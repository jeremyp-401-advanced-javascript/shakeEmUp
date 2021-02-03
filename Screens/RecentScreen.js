import * as React from "react";
import { Text, Surface } from "react-native-paper";
import { StyleSheet, ScrollView, View } from "react-native";

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  }
}

const styles = StyleSheet.create({
  history: {
    ...padding(10, 10, 10, 10),
  },
});

const RecentRoute = () => {
  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.history}>
          <Text>This is where the history gets saved...</Text>
        </View>
      </ScrollView>
    </React.Fragment>
  )
}

export default RecentRoute;
