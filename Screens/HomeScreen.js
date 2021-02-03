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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  home: {
    ...padding(10, 10, 10, 10),
  },
});

const HomeRoute = () => {
  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.home}>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

export default HomeRoute;