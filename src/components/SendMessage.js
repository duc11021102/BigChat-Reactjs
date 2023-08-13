import classes from "./SendMessage.module.css";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// hàm addDoc cho phép thêm dữ liệu vào collection
// serverTimestamp đại diện cho mộc thời gian hiện tại của máy chủ 
const SendMessage = ({scroll}) => {
  const [message, setMessage] = useState("");
  const submitHandler = async (event) => {
    console.log(typeof message);
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    //auth.currentUser truy cập thông tin của người dùng hiện tại 
    // uid là user id
    console.log(auth.currentUser);
    // thêm một tài liệu mới vào collection
    const docRef = await addDoc(collection(db, "messages"), {
      text: message || null,
      name: displayName || null,
      avatar: photoURL || null,
      createdAt: serverTimestamp() || null,
      uid,
    });
    console.log("Document written with ID: ", docRef.id);
    setMessage("");
    // sau khi gửi màn hình sẽ dịch xuống đoạn tin nhắn đc gửi đi 
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form className={classes.sendMessage} onSubmit={(event) => submitHandler(event)}>
      <input
        type="text"
        id="messageInput"
        name="messageInput"
        autoComplete="off"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
        className={classes.input}
        placeholder="Type your message"
      ></input>
      <button type="submit">Send</button>
    </form>
  );
};
export default SendMessage;
