# Chùa Việt Online — Prototype 0.1

Bản mẫu game 3D trên trình duyệt, có:
- Sân chùa, chính điện, tượng Phật, hồ sen, cây và cổng tam quan dựng bằng hình khối 3D.
- Nhân vật có thể di chuyển bằng WASD/phím mũi tên hoặc thao tác kéo trên màn hình cảm ứng.
- Nhiều người chơi có thể nhìn thấy nhau khi cùng kết nối vào một máy chủ.
- Ba tương tác cộng đồng: chắp tay, hoa sen và chào.

## Chạy trên máy tính

Cần cài Node.js 18 trở lên.

```bash
npm install
npm start
```

Mở http://localhost:3000

Để thử multiplayer trên cùng máy, mở địa chỉ trên ở hai tab hoặc hai trình duyệt.

## Đưa lên Internet

Đưa toàn bộ thư mục này lên một dịch vụ hosting có hỗ trợ Node.js và WebSocket (ví dụ Render, Railway hoặc VPS). Thiết lập lệnh cài đặt `npm install` và lệnh chạy `npm start`. Không dùng hosting tĩnh thông thường vì máy chủ Socket.IO cần chạy liên tục.

## Giới hạn bản thử nghiệm

Đây là prototype kỹ thuật, chưa có đăng ký/đăng nhập, lưu tiến trình, chat, chống gian lận, phân phòng, tối ưu tải lớn hoặc mô hình 3D chuyên nghiệp. Dữ liệu người chơi chỉ tồn tại trong bộ nhớ máy chủ và mất khi máy chủ khởi động lại. Cảnh quan đang dùng hình khối 3D tạm; có thể thay bằng asset 3D được cấp phép ở giai đoạn tiếp theo.


## Tối ưu điều khiển iPhone 12

- Có joystick cảm ứng ở góc trái, dùng Pointer Events và `touch-action:none`.
- Có nút đổi góc nhìn thứ nhất / thứ ba.
- Giao diện nút hành động tự sắp xếp trên màn hình nhỏ.
- Nên thử Safari ở chế độ ngang để có tầm nhìn rộng hơn.
- Đây là bản web prototype; để nhiều người cùng chơi qua Internet, cần triển khai cả server Node.js/Socket.IO lên hosting hỗ trợ WebSocket.
