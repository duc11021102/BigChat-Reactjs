import classes from "./Message.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
const Message = (props) => {
  const [user] = useAuthState(auth);


  // nếu mình đang đăng nhập, nếu là tin nhắn của mình nhắn thì sẽ xuất hiện ở bên phải còn người khác sẽ ở bên trái màn hình
  const classesUser = `${classes.container} ${
    props.message.uid === user.uid ? classes.right : null
  }`;
  return (
    <div className={classesUser}>
      <img src={props.message.avatar} alt="avatar"></img>
      <div className={classes.content}>
        <p className={classes.contentName}>{props.message.name}</p>
        <p className={classes.contentText}>{props.message.text}</p>
      </div>
    </div>
  );
};
export default Message;
