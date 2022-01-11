import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import styles from "@styles";
import PlayersContainer from "@containers/Players";
import ChatsContainer from "@containers/Chats";
import DicesContainer from "@containers/Dices";
import ResultsContainer from "@containers/Results";
import { useParams } from 'react-router-dom';


function DiceGame () { 

  // url에 파라미터가 있을 때 사용 가능
  const { userId, roomId } = useParams();

  return (
    <View style={styles.wrapperContainer}>
      <StatusBar style="auto" />
      <ScrollView>
        <PlayersContainer name = { userId }/>
        <ChatsContainer />
        <DicesContainer />
        <ResultsContainer />
      </ScrollView>
  </View>
  )
}


export default DiceGame;
