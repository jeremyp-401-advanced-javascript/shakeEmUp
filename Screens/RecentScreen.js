import * as React from "react";
import { Text } from "react-native-paper";
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
          <Text>Each roll of the dice will get stored here for the current session.</Text>
          <Text>In the future, I could use a persistent storage using file storage.</Text>
          <Text>For now I'm hoping to use a context object, but React Native seems to hate it, much like everything else I try to do.</Text>
        </View>
      </ScrollView>
    </React.Fragment>
  )
}

export default RecentRoute;
