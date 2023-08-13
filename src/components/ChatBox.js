import classes from "./ChatBox.module.css";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useState, useEffect, useRef } from "react";
import {
  query, // query cho phép tạo 1 truy vấn đến cơ sở dữ liệu 
  collection, // hàm này chỉ định một bảng trong cơ sở dữ liệu 
  orderBy, // hàm này sắp xếp dữ liệu theo 1 trường cụ thể 
  onSnapshot,// hàm này đăng ký lắng nghe sự thay đổi trong cơ sở dữ liệu 
  limit, // giới hạn dữ liệu đc trả về 
} from "firebase/firestore";

import { db } from "../firebase"; // import database 
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef(null);


  // kết nối đến cơ sở dữ liệu firestore 
  useEffect(() => {
    const q = query( // biến q lưu dẽ truy vấn đến bảng messages 
      collection(db, "messages"), // xác định bảng đc truy vấn trong cơ sở dữ liệu db
      orderBy("createdAt", "desc"), // sắp xếp dữ liệu trả về theo trường creatAt theo thứ tự giảm dần 
      limit(50) // giới hạn kết quả trả về là 50
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => { // hàm onSnapshot để đăng ký lắng nghe sự thay đổi trong kết quả truy vấn q , nếu
      // nếu có sự thay đổi trong dữ liệu , hàm callback (QuerySnapshot)=>{} sẽ đc gọi 
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => { //  duyệt qua từng tài liệu 
        console.log(doc)
        fetchedMessages.push({ ...doc.data(), id: doc.id }); 
        //  sao chép tất cả các trường từ dữ liệu của tài liệu doc.data()
        // thêm trường id vào mỗi đối tượng mới 
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
