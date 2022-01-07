import { StyleSheet } from "react-native";

const sampleLayout = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 10,
  minHeight: 150,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  // Wrapper
  wrapperContainer: {    
    paddingVertical: 30,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
  },

  // Players
  playersContainer: {
    ...sampleLayout,
    backgroundColor: "red",
  },
  player: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Chats
  chatsContainer: {
    ...sampleLayout,
    backgroundColor: "blue",
  },
  chatBox: {
    backgroundColor: "aqua",
    padding: 10,
  },
  chatText: {
    fontSize: 16,
    color: 'blue',
  },
  chatAuthor: {
    fontSize: 12,
  },

  // Dices
  dicesContainer: {
    ...sampleLayout,
    backgroundColor: "green",
    marginTop: 10,
  },

  // Results
  resultsContainer: {
    ...sampleLayout,
    backgroundColor: "yellow",
    marginTop: 10,
  }
});

export default styles;
