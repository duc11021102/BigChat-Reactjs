import classes from './Welcome.module.css';
import GoogleSignin from '../img/btn_google_signin_dark_pressed_web.png';
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
// cho phép sử dụng phương thức xác thực thông qua Google
// phương thức trong Firebase Authentication cho phép bạn chuyển hướng người dùng đến giao diện xác thực của Google
const Welcome = () => {
    const SignIn = () => {
      // tạo một thẻ hiện của GoogleAuthProvider
        const provider = new GoogleAuthProvider();
        // Khi người dùng chọn xác thực qua Google, chuyển hướng đến giao diện xác thực
        signInWithRedirect(auth, provider);
      }
  return (
    <div className={classes.container}>
      <h1>Welcome to BigChat</h1>
      <button className={classes.btnSignin} onClick={SignIn}>
        <img src={GoogleSignin} alt="btnSignin"></img>
      </button>
    </div>
  );
};
export default Welcome;
