import React, { useState, useEffect, useContext } from 'react';
import { View } from "react-native";
import { Text } from "react-native-paper";
import Select from 'react-native-picker-select';
import { AppSettingsContext } from '../CustomProperties/RollSettings';

const SelectBar = (props) => {
  const appSetCtxt = useContext(AppSettingsContext);
  console.log(appSetCtxt);

  // useEffect(() => {
  //   console.log(`diceNum says: `, diceNum);
  // }, [appSetCtxt.diceNum])

  // useEffect(() => {
  //   console.log(`diceType says: `, diceType);
  // }, [appSetCtxt.diceType])

  return (
    <View>
      <Select 
        onValueChange={(value) => appSetCtxt.updateNumber(value)}
        items={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
            { label: '6', value: '6' },
        ]}
      />
      <Select 
        onValueChange={(value) => appSetCtxt.updateType(value)}
        items={[
            { label: '4 Sided', value: '4' },
            { label: '6 Sided', value: '6' },
            { label: '8 Sided', value: '8' },
            { label: '10 Sided', value: '10' },
            { label: '12 Sided', value: '12' },
            { label: '20 Sided', value: '20' },
        ]}
      />
    </View>
  );
};

export default SelectBar;
