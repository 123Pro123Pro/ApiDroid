Hướng dẫn cài đặt và sử dụng công cụ ApiDroid

1. Chuẩn bị môi trường
	1.1 Computer (cài đặt môi trường ApiDroid-Server):
		- Cài đặt python3
		- Cài đặt cái thư viện python được liệt kê trong file: ./Server/requirements.txt
 	1.2 Điện thoại Android (cài đặt môi trường ApiDroid-Agent):
		- Root
		- Copy file ./Agent/apidroid.agent và thư mục /data/local/tmp/ trên điện thoại

2. Khởi chạy ApiDroid:
	2.1 Điện thoại Android (khởi chạy ApiDroid-Agent):
		- Tại thực mục chứa file apidroid.agent (theo phần 1.2 là /data/local/tmp/) ta gõ lệnh "$./apidroid.agent &"
	2.2 Computer (khởi chạy ApiDroid-Server)
		- Tại thư mục Server chạy file run.bat
		- Mở browser với đường link: http://localhost:5001

3. Thao tác với Web UI (http://localhost:5001):
	3.1 Thiết lập kết nối ứng dụng tại tab Target
	3.2 Thiết lập bypass các chức năng bảo mật của ứng dụng tại tab Preload (nếu cần)
	3.3 Sử dụng các chức năng còn lại


4. Video demo:
	4.1 Chuẩn bị môi trường:
	4.2 Demo ứng dụng:
	    Tab Target
		Khởi chạy ApiDroid:
		Lựa chọn device kết nối:
		Liệt kê các ứng dụng đang chạy:	
		Liệt kê môi trường của ứng dụng:
		Chụp màn hình screenshot
		Download tập tin APK
            Tab Enumeration
		Liệt kê các class đang được load trong ứng dụng
		Liệt kê các function đang được load
		Xem và sửa script code
	    Tab Multi Hooks
		Hook vào nhiều class một lúc
	    Tab Hooks
		Hook vào function cụ thể 
	    Tab Intercept
		Intercept vào function cụ thể
	    Tab Preload
		Bypass SSL Pinning
		Setup Proxy
		Enable Inspect WebView
	    Tab Monitor
		Theo dõi quá trình cập nhật dữ liệu của FileIO, SharedPreferences, Sqlite, Webview, IPC, MISC,
	
 	

		
	
	
	
	


	
		