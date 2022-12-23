import express from "express";
import postRouters from "./routes/posts.js";
import userRouters from "./routes/posts.js";
import authRouters from "./routes/posts.js";
const app = express();

app.use(express.json());
app.use("/api/auth", authRouters);
app.use("/api/posts", postRouters);
app.use("/api/users", userRouters);

app.listen(8800, () => {
  console.log("Connected!!");
});
