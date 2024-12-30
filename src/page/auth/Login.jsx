import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // Giữ nguyên errors là object
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setErrors({}); // Reset errors
    setIsLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        username: username,
        password: password,
      });

      // console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("userId", response.data.user.id);
      console.log("localStorage: ", localStorage);
      window.location.href = '/index';
    } catch (error) {
      if (error.response) {
        // Xử lý trường hợp error là string
        if (typeof error.response.data.error === "string") {
          setErrors({ general: [error.response.data.error] }); // Gán vào errors.general
        } else {
          // Gán toàn bộ object error vào state errors
          setErrors(error.response.data.error || {});
        }
      } else if (error.request) {
        setErrors({
          request: ["No response from server. Please check your network connection."],
        });
      } else {
        setErrors({ other: ["An error occurred. Please try again."] });
      }
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="bg-[url(/background.876de83f.png)] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        {/* Icon Section */}
        <div className="flex justify-end mb-8">
          <div className="h-8 w-8 rounded-full mr-2">
            <a href="/">
              <img src="/public/iconchat.png" alt="" />
            </a>
          </div>
          <div className="h-8 w-8 rounded-full">
            <a href="/">
              <img src="/public/lang.png" alt="" />
            </a>
          </div>
        </div>

        {/* Input Section */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Vui lòng nhập tài khoản của bạn
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Hiển thị lỗi cho username */}
          {errors.username && (
            <div className=" text-sm mt-1">
              {errors.username.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="pwd">
            Mật khẩu của bạn
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="pwd"
            type="password"
            name="pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Hiển thị lỗi cho password */}
          {errors.password && (
            <div className=" text-sm mt-1">
              {errors.password.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
        </div>
        {/* Hiển thị lỗi chung (general) */}
        {errors.general && (
          <div className=" text-sm mb-4">
            {errors.general.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        {/* Hiển thị lỗi request và other (nếu có) */}
        {errors.request && (
          <div className=" text-sm mb-4">
            {errors.request.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        {errors.other && (
          <div className=" text-sm mb-4">
            {errors.other.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <div className="flex items-center justify-center mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </div>

        {/* Tips Section */}
        <div className="text-center text-white">
          Chưa có tài khoản?
          <a className="inline-block align-baseline font-bold text-sm text-white ml-1" href="/register">
            Đăng ký
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;