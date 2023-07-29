import classes from './Welcome.module.css';
import GoogleSignin from '../img/btn_google_signin_dark_pressed_web.png';
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const Welcome = () => {
    const SignIn = () => {
        const provider = new GoogleAuthProvider();
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
