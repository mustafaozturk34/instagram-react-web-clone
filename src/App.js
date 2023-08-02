import { useEffect, useRef, useState } from "react";
import image1 from "./assets/images/login-phone-image-1.png";
import image2 from "./assets/images/login-phone-image-2.png";
import image3 from "./assets/images/login-phone-image-3.png";
import image4 from "./assets/images/login-phone-image-4.png";
import loginLogo from "./assets/images/login-logo.png";
import Input from "./components/Input";
import { AiFillFacebook } from "react-icons/ai";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enabled = username && password;
  const ref = useRef();
  useEffect(() => {
    let images = ref.current.querySelectorAll("img");
    images[0].classList.remove("opacity-0");
  }, []);
  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      current === 0
        ? images[total - 1].classList.add("opacity-0")
        : images[current - 1].classList.add("opacity-0");
      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current++;
      }
    };
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);
  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center justify-center gap-x-8">
      <div className="hidden md:block w-[380px] h-[581px] bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px] relative">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src={image1}
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src={image2}
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src={image3}
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src={image4}
          />
        </div>
      </div>
      <div className="w-[350px] grid gap-y-3">
        <div className=" bg-white border p-[40px] pt-10 pb-6">
          <a href="#" className="flex justify-center mb-8">
            <img className="h-[51px]" src={loginLogo} />
          </a>
          <form className="grid gap-y-1.5">
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Phone number, username or email"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
            <button
              type="submit"
              disabled={!enabled}
              className="h-[30px] bg-brand mt-1 text-white text-sm rounded font-medium disabled:opacity-50"
            >
              Log In
            </button>
            <div className="flex items-center my-2.5 mb-3.5">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4 text-[13px]  font-semibold">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <a
              href="#"
              className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook mb-2.5"
            >
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>
            <a
              href="#"
              className="text-xs flex items-center justify-center text-link"
            >
              Forgot password?
            </a>
          </form>
        </div>
        <div className="bg-white border p-4 text-sm text-center">
          Don't have an account?{" "}
          <a href="#" className="font-semibold text-brand">
            {" "}
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
