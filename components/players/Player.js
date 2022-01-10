import { View, Text } from "react-native";
import styles from '@styles/Players';

const Player = ({ name }) => {
  return (
    <View>
      <Text style={styles.Player}>{name}</Text>
    </View>
  )
}

export default Player;