import { StyleSheet } from "react-native";

export const sampleLayout = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 10,
  minHeight: 150,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  wrapperContainer: {    
    paddingVertical: 30,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
  },
});

export default styles;