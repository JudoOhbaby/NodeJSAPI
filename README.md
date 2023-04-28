API สร้างโดยใช้ NodeJS
วิธี Run API
1.ติดตั้ง Node.js
2.เปิด cmd ในโฟลเดอร์ที่เก็บไฟล์
3.พิมพ์ npm install ใน cmd
4.พิมพ์ node server.js เพื่อรัน server api

การทดสอบ api โดยใช้ POSTMAN

ให้ใช้ URL localhost:4000/getData
ส่วนของ body ให้เลือก x-www-form-urlencoded 
ใส่ key คือ companyNames
value คือ AAPL

จะเห็นว่า การดึงข้อมูลครั้งที่ 2 เป็นต้นไปจะใช้เวลาเร็วกว่าครั้งแรก เพราะมีการเก็บ cach ข้อมูลซ้ำและส่งกลับมา
