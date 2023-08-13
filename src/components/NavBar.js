import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import classes from "./Navbar.module.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);// trả về thông tin người dùng HIỆN TẠI đang đăng nhập 

  const signOut = () => {
    auth.signOut(); // đăng xuất
  };
  const SignIn = () => {
    // tạo một thẻ hiện của GoogleAuthProvider
    const provider = new GoogleAuthProvider();
    // Khi người dùng chọn xác thực qua Google, chuyển hướng đến giao diện xác thực
    signInWithRedirect(auth, provider);
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>BigChat</h1>
      {user ? (
        <button onClick={signOut} className={classes.btnSignout} type="button">
          Sign Out
        </button>
      ) : (
        <button className={classes.btnSignin} onClick={SignIn}>
          <img src={GoogleSignin} alt="btnSignin"></img>
        </button>
      )}
    </div>
  );
};
export default NavBar;
