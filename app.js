import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import express from "express";
import hpp from "hpp";
import router from "./router/api.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { MONGODB_CONNECTION,PORT,WEB_CACHE,MAX_JSON_SIZE,URL_ENCODED,REQUEST_LIMIT_TIME,REQUEST_LIMIT_NUMBER } from "./app/config/config.js";
import fileUpload from "express-fileupload";




const app=express();

app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({extended:URL_ENCODED}));
app.use(hpp());
app.use(helmet())
app.use(cookieParser());

app.use(fileUpload({
    limits:{fileSize:50*1024*1024},
}))


const limiter=rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER});
app.use(limiter);

app.set('etag',WEB_CACHE)


mongoose.connect(MONGODB_CONNECTION,{autoIndex:true}).then(()=>{
    console.log("MONGODB connect")
}).catch(err=>{
    console.log("MONGODB is Error")
})



app.use("/api",router)

app.use(express.static('storage'));

app.listen(PORT,()=>{
    console.log(`App is running port ${PORT}`)
})