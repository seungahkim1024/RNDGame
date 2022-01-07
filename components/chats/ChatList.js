import { View, Text } from "react-native";
import styles from "@styles";

const ChatList = ({ data }) => {
  return (
    <View style={styles.chatBox}>
      {data.map(chat => (
        <Text style={styles.chatText} key={chat.date}>
          {chat.content} <Text style={styles.chatAuthor}>({chat.author})</Text>
        </Text>
      ))}
    </View>
  );
};

export default ChatList;
