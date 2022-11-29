# .catch
In today's climate of increasing remote work, it is tough for software engineers to meet new people within their own company, let alone other people in the industry. This is where the idea for .catch came in.

.catch is a dating application designed for software engineers to build meaningful relationships. Our platform makes it easy for software engineers to connect and start conversations with one another with prompts specifically designed around software engineering.

## Background
.catch is a group project created by Katie Han, Jason Song, Brendan Tsuda, and Mitchell Jindra. In the four day timeline of the project, these engieneers were able to learn and implement previously unkonwn backend framework and database (Express.js and MongoDB), formulate and structure a project idea, and deploy a working product to production.

## Technologies, Libraries, and APIs
- React.js
- Express.js
- Mongoose
- MongoDB
- AWS
- Multer
- Passport-JWT
- React-Redux
- Swiper.js
- React-Tinder-Card

## Functionality and MVPs
![splash](https://user-images.githubusercontent.com/65314998/204390327-0ba82807-54d8-4571-82ca-f349642f2380.gif)
<br>
In .catch, users can:
- create their profile including prompt questions and uploading photos as well as updating their profile: full CRUD
- interact with other profiles by swiping (like) other users and match with them if the other user has previously liked them
  - two views allow for easy detection of who you can match with
- send messages to users that they have matched with: full CRUD

![message](https://user-images.githubusercontent.com/65314998/204391360-2bee83f9-e47d-4dbc-8a6f-4d6352a11d33.gif)

In addition, this project includes:
- cohesive styling
- user authorization using JWT protocols

## Code Snippets
### AWS Image Upload
``` js
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
### Random user likes for matching demonstration
The following code snippet handles the logic for selecting a collection of random users to have automatically liked every new user account. The function used selects and rounds 75% of the total users. This ensures that every new user has some people that they can match with automatically without having the other user like them.
``` js
const randomUsers = ([...users].sort(() => 0.5 - Math.random())).slice(0, Math.round(0.75 * users.length));

const resetDemo = () => {
  ...
  randomUsers.forEach(user => dispatch(updateUser({ ...user, likedUserId: currentUser._id })));
  ...
}
```

### Swipe on users by button click
The following code demonstrates how user swiping was handled. The React hook, `useMemo()` was used to store an array of references to the user cards so that when the appropriate button was pressed, the card would be swiped out of the deck.
``` js
const [currentIndex, setCurrentIndex] = useState(usersToSwipe.length + 1);
const currentIndexRef = useRef(currentIndex);

const childRefs = useMemo(
    () =>
        Array(usersToSwipe.length + 2)
            .fill(0)
            .map((i) => React.createRef()),
    [users.length]
)

const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
}

const canSwipe = currentIndex >= 0;

const swipe = async (dir) => {
    if (canSwipe) {
        await childRefs[currentIndex].current.swipe(dir)
    }
}
```
