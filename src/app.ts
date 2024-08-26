import express, { Request, Response } from "express";
const app = express();

// parser

app.use(express.json());
app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Developer!");
});

app.post("/post", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Successfully Get/Post",
  });
});

export default app;
