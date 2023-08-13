import "./App.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";
import { auth } from "./firebase"; // đối tượng xác thực auth cho phép thực hiện các hoạt động liên quan đến xác thực người dùng 
import { useAuthState } from "react-firebase-hooks/auth";// useAuthState dùng để theo dõi trạng thái xác thực của người dùng 

function App() {
  const [user] = useAuthState(auth);// trả về thông tin người dùng HIỆN TẠI đang đăng nhập 
  return (
    // nếu đang có user đăng nhập có nghĩa là người dùng đã đăng nhập thì render ra ChatBox còn k chưa đăng nhập thì render ra Welcome page
    <div className="App">
      <NavBar />
      {user ? <ChatBox/> : <Welcome/>}
    </div>
  );
}

export default App;
