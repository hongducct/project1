import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BindCard = () => {
  const [bankInfo, setBankInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    tel: "",
    bank_name: "",
    address: "",
    site: "",
    account_number: "",
    bank_account_holder: "", // Sửa tên trường này
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      fetchBankInfo(storedUserId);
    }
  }, []);

  const fetchBankInfo = async (userId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/banks/${userId}/bank`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Bank info:", response.data); // Log response.data ra để kiểm tra

      // Kiểm tra nếu response.data là array và có phần tử
      if (Array.isArray(response.data) && response.data.length > 0) {
        setBankInfo(response.data[0]); // Lấy phần tử đầu tiên trong mảng
      } else {
        setBankInfo(null); // Set bankInfo thành null nếu response.data là mảng rỗng
      }

    } catch (error) {
      console.error('Error fetching bank info:', error);
      toast.error("Không thể lấy thông tin ngân hàng.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    if (!userId) {
      setErrors({ general: ["User ID not found."] });
      setIsLoading(false);
      return;
    }

    try {
        console.log("formData:", formData); // Log formData ra để kiểm tra
      const response = await axios.post(
        "http://127.0.0.1:8000/api/banks",
        {
          user_id: parseInt(userId, 10),
          bank_name: formData.bank_name,
          account_number: formData.account_number,
          account_name: formData.username,
          address: formData.address,
          site: formData.site,
        //   bankaccount: formData.bankaccount,
        bankaccount: formData.bank_account_holder, // Thêm trường này vào request
          tel: formData.tel,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Thêm thông tin ngân hàng thành công!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setBankInfo(response.data);
      setFormData({
        username: "",
        tel: "",
        bank_name: "",
        address: "",
        site: "",
        account_number: "",
        bank_account_holder: "",
      });
    } catch (error) {
      if (error.response) {
        setErrors(
          error.response.data.errors || {
            general: [
              error.response.data.message || "Lỗi không xác định.",
            ],
          }
        );
      } else if (error.request) {
        setErrors({
          general: [
            "Không có phản hồi từ máy chủ. Vui lòng kiểm tra kết nối mạng.",
          ],
        });
      } else {
        setErrors({ general: ["Đã xảy ra lỗi. Vui lòng thử lại."] });
      }
      console.error("Lỗi thêm thông tin ngân hàng:", error);
      toast.error("Đã xảy ra lỗi. Vui lòng thử lại.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white py-2 px-4 flex items-center justify-between shadow-md">
        <a href="javascript:history.go(-1)" className="text-black">
          <i className="material-icons">chevron_left</i>
        </a>
        <div className="text-center flex-grow">
          <button className="w-full text-black font-bold">Rút</button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-700 text-sm mt-4">
          Những hội viên thân mến, để bảo vệ số dư tài khoản của bạn, vui lòng không
          nhập mật khẩu thẻ ngân hàng vào ứng dụng, hệ thống sẽ bảo mật tuyệt đối
          thông tin thẻ ngân hàng của bạn
        </p>

        {isLoading ? (
          <div>Loading...</div>
        ) : bankInfo ? (
          // Hiển thị thông tin bank
          <>
            <h6 className="text-lg font-semibold mt-4">Thông tin cá nhân</h6>
            <div className="mt-2">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tên tài khoản thụ hưởng
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  value={bankInfo.account_name}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  value={bankInfo.tel}
                  readOnly
                />
              </div>
            </div>

            <h6 className="text-lg font-semibold mt-4">Thông tin thẻ ngân hàng</h6>
            <div className="mt-2">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Ngân hàng
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  value={bankInfo.bank_name}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Ngân hàng
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  value={bankInfo.address}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tiểu chi nhánh
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  value={bankInfo.site}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Số tài khoản ngân hàng
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  value={bankInfo.account_number}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tên người đứng tên tài khoản
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                  value={bankInfo.bankaccount}
                  readOnly
                />
              </div>
            </div>
          </>
        ) : (
          // Hiển thị form thêm bank
          <form onSubmit={handleSubmit} id="login-form">
            <h6 className="text-lg font-semibold mt-4">Thông tin cá nhân</h6>
            <div className="mt-2">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tên tài khoản thụ hưởng
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="username"
                  maxLength="60"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              {errors.username && (
                <div className="text-red-500 text-sm w-full">
                  {errors.username.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="tel"
                  maxLength="20"
                  value={formData.tel}
                  onChange={handleInputChange}
                />
              </div>
              {errors.tel && (
                <div className="text-red-500 text-sm w-full">
                  {errors.tel.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
            </div>

            <h6 className="text-lg font-semibold mt-4">Thông tin thẻ ngân hàng</h6>
            <div className="mt-2">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Ngân hàng
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="bank_name"
                  maxLength="20"
                  value={formData.bank_name}
                  onChange={handleInputChange}
                />
              </div>
              {errors.bank_name && (
                <div className="text-red-500 text-sm w-full">
                  {errors.bank_name.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Ngân hàng
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="address"
                  maxLength="20"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              {errors.address && (
                <div className="text-red-500 text-sm w-full">
                  {errors.address.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tiểu chi nhánh
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="site"
                  maxLength="50"
                  value={formData.site}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.site && (
                <div className="text-red-500 text-sm w-full">
                  {errors.site.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Số tài khoản ngân hàng
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="account_number"
                  maxLength="50"
                  value={formData.account_number}
                  onChange={handleInputChange}
                />
              </div>
              {errors.account_number && (
                <div className="text-red-500 text-sm w-full">
                  {errors.account_number.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Tên người đứng tên tài khoản
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="bank_account_holder"
                  maxLength="50"
                  value={formData.bank_account_holder}
                  onChange={handleInputChange}
                />
              </div>
              {errors.bank_account_holder && (
                <div className="text-red-500 text-sm w-full">
                  {errors.bank_account_holder.map((error, index) => (
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
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow mt-6 mb-2 w-full"
              type="submit"
            >
              Xác nhận
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default BindCard;