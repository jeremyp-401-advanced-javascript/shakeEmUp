import * as React from "react";
import { Appbar } from "react-native-paper";

const TopBar = () => (
  <Appbar.Header>
    {/* <Appbar.BackAction /> */}
    <Appbar.Content title="Shake 'Em Up" subtitle="Interactive Dice Roller" />
  </Appbar.Header>
);

export default TopBar;
