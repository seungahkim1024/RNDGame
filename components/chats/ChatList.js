import { View, Text } from "react-native";
import styles from "@styles/Chats";

const ChatList = ({ data }) => {
  return (
    <View style={styles.Box}>
      {data.map(chat => (
        <Text style={styles.Text} key={chat.date}>
          {chat.content} <Text style={styles.Author}>({chat.author})</Text>
        </Text>
      ))}
    </View>
  );
};

export default ChatList;
