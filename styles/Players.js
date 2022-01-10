import { StyleSheet } from "react-native";
import { sampleLayout } from '@styles';

const styles = StyleSheet.create({
  Container: {
    ...sampleLayout,
    backgroundColor: "red",
  },
  Player: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;