import Image from "next/image";
import reddit from "../assets/images/reddit-logo.webp";
import google from "../assets/icons/googleIcon.png";

const style = {
  wrapper: "flex min-h-screen flex-col items-center justify-center gap-y-14",
  loginBtn: "group flex items-center space-x-4 rounded border-gray-300 border p-4 hover:bg-white",
  loginBtnText: "font-bold group-hover:text-black"
};

const Login = () => {
  return (
    <div className={style.wrapper}>
      <Image src={reddit} width="300" height="300" alt="reddit" />
      <button className={style.loginBtn}>
        <Image src={google} width="25" height="25" alt="google" />
        <span className={style.loginBtnText}>Sign In with Google</span>
      </button>
    </div>
  );
};
export default Login;
