import React, { useState } from "react";
import HomeRoute from "./HomeScreen";
import RollRoute from "./RollScreen";
import RecentRoute from "./RecentScreen";
import { BottomNavigation } from "react-native-paper";

const Screen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home", color: "#3F51B5" },
    { key: "roll", title: "Roll", icon: "dice-multiple", color: "#009688" },
    { key: "recent", title: "Recent", icon: "history", color: "#795548" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    roll: RollRoute,
    recent: RecentRoute,
  });

  // https://callstack.github.io/react-native-paper/bottom-navigation.html
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Screen;
