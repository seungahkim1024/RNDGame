import { View, Text } from "react-native";
import styles from "@styles/Chats";
import ChatList from '@components/chats/ChatList'

const Chats = () => {
  const chatData = [
    {
      date: '100000002',
      content: '화이팅!',
      author: '홍길동',
    },
    {
      date: '100000003',
      content: '화이팅!!',
      author: '홍길순',
    },
    {
      date: '100000003',
      content: '줄까?',
      author: '홍길동',
    },
    {
      date: '100000004',
      content: '응!',
      author: '홍길동',
    }
  ]
  return (
    <View style={styles.Container}>
      <Text>
        <ChatList data={chatData} />
      </Text>
    </View>
  );
};

export default Chats;
