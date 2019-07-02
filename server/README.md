** Install some packages:

$ npm install express --save
$ npm install body-parser --save
$ npm install cookie-parser --save
$ npm install multer --save

$ npm install router --save
$ npm install mongodb --save

// Using for authentication
// HEADER { 'authorization': 'JWT <encodeJWT>'}
$ npm install jsonwebtoken
$ npm install bcrypt


// Using for .env
$ npm install dotenv

** DEBUG
npm install -g nodemon

** Design Pattern: Factory Method


** How to test server???
1. Right click server folder and choose 'Open In Terminal'.
2. Run command 'node server.js' for old version (or 'node api.js' for new version).
3. Open Postman application and test api.


** MongoDb Cloud
link: https://www.mongodb.com/cloud
username: trungdev1991@gmail.com    
password: Assange@123

** APIs

+++ Create New User
POST /auth/register HTTP/1.1
Host: 127.0.0.1:3000
Content-Type: application/x-www-form-urlencoded
cache-control: no-cache
Postman-Token: a397f09c-a274-4163-b343-dcd6e06b1222

firstName=Test&lastName=Admin&gender=Female&phone=090128231&email=admin%40fmail.com&password=123

+++ Login
POST /auth/signin HTTP/1.1
Host: 127.0.0.1:3000
Content-Type: application/x-www-form-urlencoded
cache-control: no-cache
Postman-Token: 94422f09-e558-4fe6-9686-ab490f34cf6c

email=admin%40fmail.com&password=123

+++ Get All Users
GET /auth/getAllUsers HTTP/1.1
Host: 127.0.0.1:3000
authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGZtYWlsLmNvbSIsIl9pZCI6IjVjYzdkMjgyOTY5MzBhNDBmODgwNjA2NSIsImlhdCI6MTU1NjYwMTk1NX0.8RF9zvgXV0MusCRP-WWSr9ZBl37Pwb5GMIKigRMUPuw
cache-control: no-cache
Postman-Token: e11654b7-f2a7-487c-b4c7-fc89d930ae30

---------------------Post Apis----------------------------
+++ Get All Posts
GET posts/getAllPosts HTTP/1.1
Host: 127.0.0.1:3000
authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGZtYWlsLmNvbSIsIl9pZCI6IjVjYzdkMjgyOTY5MzBhNDBmODgwNjA2NSIsImlhdCI6MTU1NjYwMTk1NX0.8RF9zvgXV0MusCRP-WWSr9ZBl37Pwb5GMIKigRMUPuw
cache-control: no-cache
Postman-Token: e11654b7-f2a7-487c-b4c7-fc89d930ae30

+++ Get Post
GET /posts/getPost/5d1a9cae4f07542908ff3a87 HTTP/1.1
Host: localhost:3000
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGZtYWlsLmNvbSIsIl9pZCI6IjVjYzdkMjgyOTY5MzBhNDBmODgwNjA2NSIsImlhdCI6MTU1NjYwMTk1NX0.8RF9zvgXV0MusCRP-WWSr9ZBl37Pwb5GMIKigRMUPuw
Cache-Control: no-cache
Postman-Token: b354219a-7784-e86e-7773-5d68d89be253

+++ Update Post
PUT /posts/updatePost/5d1a9cae4f07542908ff3a87 HTTP/1.1
Host: localhost:3000
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGZtYWlsLmNvbSIsIl9pZCI6IjVjYzdkMjgyOTY5MzBhNDBmODgwNjA2NSIsImlhdCI6MTU1NjYwMTk1NX0.8RF9zvgXV0MusCRP-WWSr9ZBl37Pwb5GMIKigRMUPuw
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 8264a520-f191-6ed9-6ed1-7e2299d8f50c

{
  "categoryId": "okokcocec",
  "userId": "2a6424fd-471f-3532-c620-c1c1c78e29b0",
  "title": "10 bước để tạo bài blog sinh động",
  "shortDescription": "Update post",
  "tags": [
    "music",
    "sex"
  ],
  "mainImage": "/backend/images/posts/atc01.png",
  "imgList": [
    {
      "description": "Update list",
      "contentType": "header",
      "imgPath": "/backend/images/posts/atc01.png",
      "title": "Header image"
    },
    {
      "description": "Update list",
      "contentType": "article",
      "imgPath": "/backend/images/posts/atc01.png",
      "title": "article image No. 1"
    },
    {
      "description": "Update list",
      "contentType": "article",
      "imgPath": "/wp-content/themes/mcl/images/atc02.png",
      "title": "article image No. 2"
    }
  ],
  "content": "Bước 1: chuẩn bị hình ảnh sinh động, trực quan,...",
  "comments": [
    {
      "userId": "2a6424fd-471f-3532-c620-c1c1c78e29b0",
      "createdDate": "2019-06-09T08:06:47+00:00",
      "text": "Bai viet hay qua"
    },
    {
      "userId": "2a6424fd-471f-3532-c620-c1c1c78e29b0",
      "createdDate": "2019-06-09T08:06:47+00:00",
      "text": "Co y nghia"
    }
  ],
  "createdDate": "2019-06-09T08:06:47+00:00",
  "show": true
}

+++ Delete Post
DELETE /posts/deletePost/5d1a9cae4f07542908ff3a87 HTTP/1.1
Host: localhost:3000
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGZtYWlsLmNvbSIsIl9pZCI6IjVjYzdkMjgyOTY5MzBhNDBmODgwNjA2NSIsImlhdCI6MTU1NjYwMTk1NX0.8RF9zvgXV0MusCRP-WWSr9ZBl37Pwb5GMIKigRMUPuw
Cache-Control: no-cache
Postman-Token: 7e010074-e077-b129-3b7f-fe3165b2244e
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

+++ Add Post
POST /posts/addPost HTTP/1.1
Host: localhost:3000
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGZtYWlsLmNvbSIsIl9pZCI6IjVjYzdkMjgyOTY5MzBhNDBmODgwNjA2NSIsImlhdCI6MTU1NjYwMTk1NX0.8RF9zvgXV0MusCRP-WWSr9ZBl37Pwb5GMIKigRMUPuw
Cache-Control: no-cache
Postman-Token: 99c3b57d-8e0e-9e38-56f8-ed5adc098969

{
  "categoryId": "okokcocec",
  "userId": "2a6424fd-471f-3532-c620-c1c1c78e29b0",
  "title": "10 bước để tạo bài blog sinh động",
  "shortDescription": "asdsdsad",
  "tags": [
    "music",
    "sex"
  ],
  "mainImage": "/backend/images/posts/atc01.png",
  "imgList": [
    {
      "description": "",
      "contentType": "header",
      "imgPath": "/backend/images/posts/atc01.png",
      "title": "Header image"
    },
    {
      "description": "",
      "contentType": "article",
      "imgPath": "/backend/images/posts/atc01.png",
      "title": "article image No. 1"
    },
    {
      "description": "",
      "contentType": "article",
      "imgPath": "/wp-content/themes/mcl/images/atc02.png",
      "title": "article image No. 2"
    }
  ],
  "content": "Bước 1: chuẩn bị hình ảnh sinh động, trực quan,...",
  "comments": [
    {
      "userId": "2a6424fd-471f-3532-c620-c1c1c78e29b0",
      "createdDate": "2019-06-09T08:06:47+00:00",
      "text": "Bai viet hay qua"
    },
    {
      "userId": "2a6424fd-471f-3532-c620-c1c1c78e29b0",
      "createdDate": "2019-06-09T08:06:47+00:00",
      "text": "Co y nghia"
    }
  ],
  "createdDate": "2019-06-09T08:06:47+00:00"
}

+++ Upload Image
POST /posts/uploadImage HTTP/1.1
Host: localhost:3000
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGZtYWlsLmNvbSIsIl9pZCI6IjVjYzdkMjgyOTY5MzBhNDBmODgwNjA2NSIsImlhdCI6MTU1NjYwMTk1NX0.8RF9zvgXV0MusCRP-WWSr9ZBl37Pwb5GMIKigRMUPuw
Cache-Control: no-cache
Postman-Token: 86f6588c-5fe1-b7d0-96d2-c238330c5553
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="image"; filename=""
Content-Type: 


------WebKitFormBoundary7MA4YWxkTrZu0gW--


** WORK TODO
+ Convert error message to json.
+ Apply Swagger
+ Upload to host.