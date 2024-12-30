import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SubLayout from "@/layout/SubLayout";
import React, { useState, useEffect } from "react"; 
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS

const ChangePwd = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [userId, setUserId] = useState(null); // Thêm state userId

  useEffect(() => {
    console.log(localStorage)
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []); // Chạy useEffect một lần khi component mount
  const handleChangePassword = async (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form
    setErrors({});
    setIsLoading(true);
    setSuccessMessage("");

    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/users/${userId}`, // Thay đổi URL
        {
          current_password: currentPassword,
          password: newPassword,
          password_confirmation: passwordConfirmation,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Thêm token vào header
          },
        }
      );

      console.log("Password changed successfully:", response.data);
      setSuccessMessage("Password changed successfully!");
      //Toast thông báo thành công
      toast.success('Đổi mật khẩu thành công!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Reset form fields after successful change
      setCurrentPassword("");
      setNewPassword("");
      setPasswordConfirmation("");
      // Optionally, display a success message or redirect the user
    } catch (error) {
      if (error.response) {
        if (typeof error.response.data.error === "string") {
          setErrors({ general: [error.response.data.error] });
        } else {
          setErrors(error.response.data.errors || {});
        }
      } else if (error.request) {
        setErrors({
          request: [
            "No response from server. Please check your network connection.",
          ],
        });
      } else {
        setErrors({ other: ["An error occurred. Please try again."] });
      }
      console.error("Password change error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SubLayout title={"Đổi mật khẩu"}>
      <form
        onSubmit={handleChangePassword}
        className="flex items-center gap-4 pt-20 flex-col lg:w-1/3 h-screen px-5 mx-auto"
      >
        <h1 className="font-semibold text-2xl">Đổi mật khẩu</h1>
        <Input
          placeholder="Mật khẩu cũ"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        {errors.current_password && (
          <div className="text-red-500 text-sm w-full">
            {errors.current_password.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        <Input
          placeholder="Mật khẩu mới"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {errors.password && (
          <div className="text-red-500 text-sm w-full">
            {errors.password.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        <Input
          placeholder="Xác nhận mật khẩu"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        {errors.password_confirmation && (
          <div className="text-red-500 text-sm w-full">
            {errors.password_confirmation.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        {/* Hiển thị lỗi chung */}
        {errors.general && (
          <div className="text-red-500 text-sm w-full">
            {errors.general.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        {errors.request && (
          <div className="text-red-500 text-sm w-full">
            {errors.request.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        {errors.other && (
          <div className="text-red-500 text-sm w-full">
            {errors.other.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        {/* Hiển thị thông báo thành công */}
        {successMessage && (
          <div className="text-green-500 text-sm w-full">{successMessage}</div>
        )}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Đang xử lý..." : "Bước kế tiếp"}
        </Button>
        <p className="text-center">
          Hãy nhớ mật khẩu. Nếu bạn quên mật khẩu, hãy liên lạc với dịch vụ khách
          hàng.
        </p>
      </form>
      <ToastContainer />
    </SubLayout>
  );
};

export default ChangePwd;