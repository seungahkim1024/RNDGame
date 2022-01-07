import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import styles from "@styles";
import PlayersContainer from "@containers/Players";
import ChatsContainer from "@containers/Chats";
import DicesContainer from "@containers/Dices";
import ResultsContainer from "@containers/Results";

export default function App() {
  return (
    <View style={styles.wrapperContainer}>
      <StatusBar style="auto" />
      <ScrollView>
        <PlayersContainer />
        <ChatsContainer />
        <DicesContainer />
        <ResultsContainer />
      </ScrollView>
    </View>
  );
}
