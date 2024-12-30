import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const USDT = () => {
    const [trc20Address, setTrc20Address] = useState('');
    const [erc20Address, setErc20Address] = useState('');
  
    const handleSubmit = async () => {
    //   try {
    //     const response = await axios.post('/index/my/save_trc20.html', {
    //       trc20: trc20Address,
    //       erc20: erc20Address,
    //     },{
    //       headers: {
    //           'X-Requested-With': 'XMLHttpRequest',
    //           'Content-Type': 'application/x-www-form-urlencoded',
    //           Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       }
    //     });
  
    //     if (response.data.code === 0) {
    //       toast.success(response.data.info, {
    //         position: "top-right",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });
    //       setTimeout(() => {
    //         window.history.back();
    //       }, 1500);
    //     } else {
    //       toast.error(response.data.info, {
    //         position: "top-right",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });
    //     }
    //   } catch (error) {
    //     toast.error("Yêu cầu không thành công", {
    //       position: "top-right",
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
        
    //   }
    setTimeout(() => {
                window.history.back();
              }, 1500);
    };
  
    return (
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
        <div className="bg-white py-2 px-4 flex items-center justify-between shadow-md">
          <a href="javascript:history.go(-1)" className="text-black">
            <i className="material-icons">chevron_left</i>
          </a>
          <div className="text-center flex-grow">
            <button className="w-full text-black font-bold">Thông tin rút tiền</button>
          </div>
          <a href="/index/user/kefu.html" className="relative">
            <img src="/static_indonesia/img/kefu.png" alt="" className="max-w-8vw" />
          </a>
        </div>
  
        <div className="p-4">
          <p className="text-white text-sm mt-4 leading-6">
            Kính gửi người dùng, để bảo vệ sự an toàn cho tiền của bạn, vui lòng không nhập mật khẩu tài khoản ngân hàng của bạn, nhân viên của chúng tôi sẽ không yêu cầu mật khẩu thẻ ngân hàng của bạn
          </p>
  
          <div className="mt-4">
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <div className="flex justify-between items-center">
                <div className="font-bold">Kiểu tài khoản</div>
                <div>TRC20</div>
              </div>
              <div className="mt-2 flex items-center">
                <div className="w-1/6">Địa chỉ</div>
                <input
                  type="text"
                  id="trc20"
                  className="w-5/6 text-sm p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Nhập ở đây"
                  value={trc20Address}
                  onChange={(e) => setTrc20Address(e.target.value)}
                />
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <div className="flex justify-between items-center">
                <div className="font-bold">Kiểu tài khoản</div>
                <div>ERC20</div>
              </div>
              <div className="mt-2 flex items-center">
                <div className="w-1/6">Địa chỉ</div>
                <input
                  type="text"
                  id="erc20"
                  className="w-5/6 text-sm p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Nhập ở đây"
                  value={erc20Address}
                  onChange={(e) => setErc20Address(e.target.value)}
                />
              </div>
            </div>
  
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
              onClick={handleSubmit}
            >
              Xác nhận
            </button>
  
            <div className="bg-white rounded-md shadow-md mt-4">
              <div className="p-4">
                <div className="font-bold">TRC20</div>
                <div className="text-sm text-black mt-2"></div>
              </div>
            </div>
  
            <div className="bg-white rounded-md shadow-md mt-4">
              <div className="p-4">
                <div className="font-bold">ERC20</div>
                <div className="text-sm text-black mt-2"></div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  };
  

export default USDT;