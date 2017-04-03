# Coffy
## Hướng dẫn
Sử dụng hàm findLocation() truyền vào 3 tham số: latitude, longtitude, distance, trong đó: 
- latitude,longtitude: vĩ độ và kinh độ của người dùng  
- distance: khoảng cách từ người dùng đến địa điểm

Kết quả trả về danh sách địa điểm trong bán kính cần tìm (đơn vị km)

### Sử dụng REST 
1. Tìm địa điểm theo lat, long, khoảng cách r, loại quán type

    POST:  localhost:3000/find/near

    param:  lat, long, r, type

    vd: (21.014825, 105.846336, 2000, restaurant)

2. Tìm địa điểm theo quận và loại quán
  
    POST: localhost:3000/find/dist

    param: type, district

    vd: (coffee, hai ba trung)

## Cài đặt
1. Tải NodeJS: https://nodejs.org/en/download/
2. Mở terminal tới thư mục Coffy:
```
npm install
node app.js
```
