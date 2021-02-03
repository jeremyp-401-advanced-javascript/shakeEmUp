import React, { useState, useContext } from 'react';
import { Divider, Button, Title, Text } from "react-native-paper";
import { StyleSheet, ScrollView, View } from "react-native";
import { AppSettingsContext } from '../CustomProperties/RollSettings';
import SelectBar from "../Components/SelectBar";

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  }
}

const styles = StyleSheet.create({
  roll: {
    ...padding(10, 10, 10, 10),
  },
});

const RollRoute = () => {
  const appSetCtxt = useContext(AppSettingsContext);
  // console.log(appSetCtxt);

  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.roll}>
          <SelectBar />
          <Divider />
          <Title>Rolling {appSetCtxt.diceNum} {appSetCtxt.diceType}-sided di{appSetCtxt.diceNum > 1 ? 'ce' : 'e'}:</Title>
          
          <Button accessibilityLabel="Roll" mode="contained" title="Roll"
            onPress={() => console.log('Pressed')}
          >
            Roll!
          </Button>
        </View>
      </ScrollView>
    </React.Fragment>
  )
}

export default RollRoute;
