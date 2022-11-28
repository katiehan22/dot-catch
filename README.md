# .catch
In today's climate of increasing remote work, it is tough for software engineers to meet new people within their own company, let alone other people in the industry. This is where the idea for .catch came in.

.catch is a dating application designed for software engineers to build meaningful relationships. Our platform makes it easy for software engineers to connect and start conversations with one another with prompts specifically designed around software engineering.

## Functionality and MVPS
In .catch, users can:
- create their profile including prompt questions and uploading photos as well as updating their profile: full CRUD
- interact with other profiles by swiping (like) other users and match with them if the other user has previously liked them
  - two views allow for easy detection of who you can match with
- send messages to users that they have matched with: full CRUD

In addition, this project includes:
- cohesive styling
- user authorization using JWT protocols

## Example Images
![splash](https://user-images.githubusercontent.com/65314998/204390327-0ba82807-54d8-4571-82ca-f349642f2380.gif)
![swipe](https://user-images.githubusercontent.com/65314998/204389590-1ab2c907-9adb-46fb-b0e4-f0ee2427c384.gif)
![message](https://user-images.githubusercontent.com/65314998/204391360-2bee83f9-e47d-4dbc-8a6f-4d6352a11d33.gif)

## Technologies, Libraries, and APIs
- React.js
- Express.js
- Mongoose
- MongoDB
- AWS
- Passport-JWT
- React-Redux
- Swiper.js
- React-Tinder-Card

## Code Snippets
### AWS Image Upload
```
const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, `${Date.now().toString()}` + '-' + file.originalname);
    }
  })
});
```
