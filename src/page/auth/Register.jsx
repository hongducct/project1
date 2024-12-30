import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [paymentPassword, setPaymentPassword] = useState('');
  const [invitationCode, setInvitationCode] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async () => {
    setErrors({});
    setIsLoading(true);
    setSuccessMessage('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
        payment_password: paymentPassword,
        invitation_code: invitationCode,
      });

      console.log('Registration successful:', response.data);
      setSuccessMessage('Registration successful! You can now login.');
      alert('Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.');
      // Optionally redirect to login page after a delay
      setTimeout(() => {
        window.location.href = '/';
      }, 300);
    } catch (error) {
      if (error.response) {
        if (typeof error.response.data.errors === 'string') {
          setErrors({ general: [error.response.data.errors] });
        } else {
          setErrors(error.response.data.errors || {});
        }
      } else if (error.request) {
        setErrors({ request: ['No response from server. Please check your network connection.'] });
      } else {
        setErrors({ other: ['An error occurred. Please try again.'] });
      }
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        {/* Icon Section */}
        <div className="flex justify-end mb-8">
          <div className="h-8 w-8 rounded-full mr-2">
            <a href="/register">
              <img src="/public/iconchat.png" alt="" />
            </a>
          </div>
          <div className="h-8 w-8 rounded-full">
            <a href="/register">
              <img src="/public/lang.png" alt="" />
            </a>
          </div>
        </div>

        {/* Input Section */}
        <form className="space-y-4">
          <div className="flex items-center">
            <label className="w-1/3 text-sm font-bold text-gray-700" htmlFor="username">
              <span className="text-red-500">*</span>Tài khoản nền tảng
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Vui lòng thiết lập tài khoản đăng nhập của bạn trên nền tảng"
            />
          </div>
          {errors.username && (
            <div className="text-red-500 text-sm mt-1 ml-1/3">
              {errors.username.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          <div className="flex items-center">
            <label className="w-1/3 text-sm font-bold text-gray-700" htmlFor="pwd">
              <span className="text-red-500">*</span>Mật khẩu
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pwd"
              type="password"
              name="pwd"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu của bạn"
            />
          </div>
          {errors.password && (
            <div className="text-red-500 text-sm mt-1 ml-1/3">
              {errors.password.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          <div className="flex items-center">
            <label className="w-1/3 text-sm font-bold text-gray-700" htmlFor="password_confirmation">
              <span className="text-red-500">*</span>Xác nhận mật khẩu
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="xác nhận lại mật khẩu đăng nhập."
            />
          </div>
          {errors.password_confirmation && (
            <div className="text-red-500 text-sm mt-1 ml-1/3">
              {errors.password_confirmation.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          <div className="flex items-center">
            <label className="w-1/3 text-sm font-bold text-gray-700" htmlFor="payment_password">
              <span className="text-red-500">*</span>Mật khẩu thanh toán
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="payment_password"
              type="password"
              name="payment_password"
              value={paymentPassword}
              onChange={(e) => setPaymentPassword(e.target.value)}
              placeholder="Vui lòng nhập mật khẩu thanh toán của bạn"
            />
          </div>
          {errors.payment_password && (
            <div className="text-red-500 text-sm mt-1 ml-1/3">
              {errors.payment_password.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          <div className="flex items-center">
            <label className="w-1/3 text-sm font-bold text-gray-700" htmlFor="invitation_code">
              <span className="text-red-500">*</span>Mã mở rộng
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="invitation_code"
              type="text"
              name="invitation_code"
              value={invitationCode}
              onChange={(e) => setInvitationCode(e.target.value)}
              placeholder="vui lòng nhập mã giới thiệu."
            />
          </div>
          {errors.invitation_code && (
            <div className="text-red-500 text-sm mt-1 ml-1/3">
              {errors.invitation_code.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
        </form>
        {/* Hiển thị thông báo thành công */}
        {successMessage && <div className="text-green-500 text-sm mt-4">{successMessage}</div>}
        {/* Hiển thị lỗi chung (general, request, other) */}
        {errors.general && (
          <div className="text-red-500 text-sm mt-4">
            {errors.general.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        {errors.request && (
          <div className="text-red-500 text-sm mt-4">
            {errors.request.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        {errors.other && (
          <div className="text-red-500 text-sm mt-4">
            {errors.other.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        {/* Button Section */}
        <div className="mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            onClick={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? 'Đang xử lý...' : 'Đăng ký tài khoản'}
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center mt-4">
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;