import { StyleSheet } from "react-native";
import { sampleLayout } from '@styles';

const styles = StyleSheet.create({
  Container: {
    ...sampleLayout,
    backgroundColor: "blue",
  },
  Box: {
    backgroundColor: "aqua",
    padding: 10,
  },
  Text: {
    fontSize: 16,
    color: 'blue',
  },
  Author: {
    fontSize: 12,
  },
});

export default styles;