import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SubLayout from "@/layout/SubLayout";
import React, { useState, useEffect } from "react"; 
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChagePaymentPwd = () => {
  const [currentPaymentPassword, setCurrentPaymentPassword] = useState("");
  const [newPaymentPassword, setNewPaymentPassword] = useState("");
  const [paymentPasswordConfirmation, setPaymentPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [userId, setUserId] = useState(null); // Thêm state userId

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []); // Chạy useEffect một lần khi component mount

  const handleChangePaymentPassword = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);
    setSuccessMessage("");

    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/users/${userId}`, // Thay đổi URL
        {
          current_payment_password: currentPaymentPassword,
          payment_password: newPaymentPassword,
          payment_password_confirmation: paymentPasswordConfirmation,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Payment password changed successfully:", response.data);
      setSuccessMessage("Payment password changed successfully!");
      toast.success('Đổi mật khẩu thanh toán thành công!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Reset form fields
      setCurrentPaymentPassword("");
      setNewPaymentPassword("");
      setPaymentPasswordConfirmation("");
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
      console.error("Payment password change error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SubLayout title={"Đổi mật khẩu thanh toán"}>
      <form
        onSubmit={handleChangePaymentPassword}
        className="flex items-center gap-4 pt-20 flex-col lg:w-1/3 h-screen px-5 mx-auto"
      >
        <h1 className="font-semibold text-2xl">Đổi mật khẩu thanh toán</h1>
        <Input
          placeholder="Mật khẩu cũ"
          type="password"
          value={currentPaymentPassword}
          onChange={(e) => setCurrentPaymentPassword(e.target.value)}
        />
        {errors.current_payment_password && (
          <div className="text-red-500 text-sm w-full">
            {errors.current_payment_password.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        <Input
          placeholder="Mật khẩu mới"
          type="password"
          value={newPaymentPassword}
          onChange={(e) => setNewPaymentPassword(e.target.value)}
        />
        {errors.payment_password && (
          <div className="text-red-500 text-sm w-full">
            {errors.payment_password.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        <Input
          placeholder="Xác nhận mật khẩu"
          type="password"
          value={paymentPasswordConfirmation}
          onChange={(e) => setPaymentPasswordConfirmation(e.target.value)}
        />
        {errors.payment_password_confirmation && (
          <div className="text-red-500 text-sm w-full">
            {errors.payment_password_confirmation.map((error, index) => (
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

export default ChagePaymentPwd;