import { View, Text } from "react-native";
import styles from "@styles";
import Player from "@components/players/Player";

const Players = () => {
  return (
    <View style={styles.playersContainer}>
      <Player name="홍길동" />
      <Player name="홍길순" />
      <Player name="철수" />
      <Player name="영희" />
    </View>
  );
};

export default Players;
