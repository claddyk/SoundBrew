import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import multer from 'multer';
import { signup,signin } from './controllers/auth.js';
import { DATABASE_KEY } from './config.js';
import { uploadPodcast } from './controllers/user.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './PodcastData/');
  },
  filename: function (req, file, cb) {
    cb(null,  file.originalname);
  },
});

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(new Error('Unsupported file type'), false);
//   }
// };

const upload = multer({ storage: Storage });

mongoose
  .connect(DATABASE_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));

app.post('/uploadPodcast', upload.single('image'), uploadPodcast);

app.listen(8000, () => console.log('Server running on port 8000'));



app.post("/uploadPodcast",upload.single("podcastImage"),uploadPodcast)
app.post("/signup", signup);
app.get("/signup",(req,res)=>{
  console.log("welcome")
  res.send('Welcome to my server!');
})
app.post("/signin",signin);