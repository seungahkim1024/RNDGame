import { View, Text } from "react-native";
import styles from '@styles';

const Player = ({ name }) => {
  return (
    <View>
      <Text style={styles.player}>{name}</Text>
    </View>
  )
}

export default Player;