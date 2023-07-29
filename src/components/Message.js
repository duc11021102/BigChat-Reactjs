import classes from "./Message.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  const classesUser = `${classes.container} ${
    message.uid === user.uid ? classes.right : null
  }`;
  return (
    <div className={classesUser}>
      <img src={message.avatar} alt="avatar"></img>
      <div className={classes.content}>
        <p className={classes.contentName}>{message.name}</p>
        <p className={classes.contentText}>{message.text}</p>
      </div>
    </div>
  );
};
export default Message;
