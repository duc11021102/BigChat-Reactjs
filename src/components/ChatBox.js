import classes from "./ChatBox.module.css";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useState, useEffect, useRef } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef(null);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    console.log(messages);

    return () => unsubscribe;
  }, []);

  return (
    <div className={classes.chatBox}>
      <div className={classes.wrapperMessage}>
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/** khi một tin nhắn đc thêm vào thì màn hình sẽ cuộn xuống*/}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </div>
  );
};
export default ChatBox;
