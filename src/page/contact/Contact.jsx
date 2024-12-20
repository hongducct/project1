import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/layout/Layout";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
const Contact = () => {
  const [contact, setContact] = useState({
    tel: "",
    text: "",
    picture: [],
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Nếu số lượng ảnh lớn hơn 5, hiển thị cảnh báo nhưng vẫn cho phép chọn toàn bộ
    if (files.length + contact.picture.length > 5) {
      alert("Bạn chỉ có thể chọn tối đa 5 ảnh.");
      return;
    }

    // Cập nhật trạng thái contact.picture với các ảnh đã chọn
    setContact((prev) => ({
      ...prev,
      picture: [...prev.picture, ...files], // Gộp các ảnh đã chọn mới với ảnh cũ
    }));
  };

  const handleRemoveImage = (index) => {
    setContact((prev) => ({
      ...prev,
      picture: prev.picture.filter((_, i) => i !== index), // Lọc ảnh tại chỉ số đã cho
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện xử lý gửi dữ liệu (VD: gửi đến API)
    console.log(contact); // Kiểm tra xem dữ liệu đã được cập nhật đúng chưa
  };

  return (
    <Layout>
      <div className="h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 lg:w-[430px] mx-auto bg-white p-5 text-sm"
        >
          <h2 className="bg-blue-500 text-white p-3">
            メッセージをお待ちしております
          </h2>
          <p>
            お客様、すぐにお手伝いできなくて申し訳ありません。お手伝いが必要でしたら、メッセージをお願いします。
            できるだけ早く問題を解決するようにご連絡いたします。
          </p>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="tel">電話*</Label>
            <Input
              type="tel"
              id="tel"
              value={contact.tel}
              onChange={handleChange}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="text">
              お客様、すぐにお手伝いできなくて申し訳ありません。お手伝いが必要でしたら、メッセージをお願いします。
              できるだけ早く問題を解決するようにご連絡いたします。*
            </Label>
            <Input
              type="text"
              id="text"
              value={contact.text}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="picture" className="flex">
              {contact.picture && contact.picture.length > 0 ? (
                contact.picture.map((file, index) => (
                  <div className="relative w-1/5">
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      className="w-full h-20"
                      alt=""
                    />
                     <Button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 bg-gray-700 text-white  w-1  h-[25px]   flex items-center justify-center"
                    >
                      <IoIosClose />
                    </Button>
                  </div>
                  
                ))
              ) : (
                <img
                  src="/upload_area.jpg"
                  className="w-1/5 h-20"
                  alt=""
                />
              )}
            </Label>
            <Input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
              multiple // Cho phép chọn nhiều file
            />
          </div>
          <p>
            * 下記フォーマットが対応されています：jpg
            、png、gif、bmp。最大5枚まで、１枚は最大5Ｍまで
          </p>
          <Button type="submit" className="bg-blue-500">
            送信
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
