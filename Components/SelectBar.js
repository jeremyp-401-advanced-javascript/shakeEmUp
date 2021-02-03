import React, { useState, useEffect, useContext } from 'react';
import { View } from "react-native";
import { Text } from "react-native-paper";
import Select from 'react-native-picker-select';
import { AppSettingsContext } from '../CustomProperties/RollSettings';

const SelectBar = (props) => {
  const appSetCtxt = useContext(AppSettingsContext);
  const [diceNum, setDiceNum] = useState(appSetCtxt.diceNum);
  const [diceType, setDiceType] = useState(appSetCtxt.diceType);

  console.log(appSetCtxt);

  const changeDiceNum = (value) => {
    setDiceNum(value);
    appSetCtxt.updateNumber(value);
  }

  const changeDiceType = (value) => {
    setDiceType(value);
    appSetCtxt.updateType(value);
  }

  const numPlaceholder = {
    label: 'Number of dice',
    value: diceNum,
    color: '#9EA0A4',
  }

  const typePlaceholder = {
    label: 'Type of dice',
    value: diceType,
    color: '#9EA0A4',
  }

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <Select 
          onValueChange={(value) => changeDiceNum(value)}
          placeholder={numPlaceholder}
          value={diceNum}
          items={[
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' },
              { label: '5', value: '5' },
              { label: '6', value: '6' },
          ]}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Select 
          onValueChange={(value) => changeDiceType(value)}
          placeholder={typePlaceholder}
          value={diceType}
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
    </View>
  );
};

export default SelectBar;
