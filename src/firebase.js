// Import the functions you need from the SDKs you need
// connect react app to firebase, cấu hình Firebase
// import các module cần thiết từ thư viện firebase
import { initializeApp } from "firebase/app";// khởi tạo kết nối firebase
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";// sử dụng getAuth để có thể truy cập các chức năng authentication 
// đăng nhập , đăng xuất , đăng ký , và các dịch vụ đăng nhập khác của google, facebook
import { getFirestore } from "firebase/firestore"; // tạo thể hiện của firestore
// firestore là cơ sở dữ liệu NoSQL realtime cho phép lưu trữ và đồng bộ dữ liệu 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//firebaseConfig bao gồm các thông tin khi cấu hình firebase 
const firebaseConfig = {
  apiKey: "AIzaSyAZ-4OgKskEJlX-ZTyiWCUw3fWcJbFpkrk",
  authDomain: "big-chat-6ae56.firebaseapp.com",
  projectId: "big-chat-6ae56",
  storageBucket: "big-chat-6ae56.appspot.com",
  messagingSenderId: "439144911344",
  appId: "1:439144911344:web:63c9782f732f44e2274d35",
  measurementId: "G-C94ZSJYV9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // khởi tạo kết nối firebase
export const auth = getAuth(app); // tạo một đối tượng xác thực auth
const db = getFirestore(app);// sử dụng biến db để có thể thao tác với database ex: thêm , sửa , xóa ...
export {db};