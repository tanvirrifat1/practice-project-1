import express, { NextFunction, Request, Response } from "express";
const app = express();

// parser

app.use(express.json());
app.use(express.text());

// Router

const userRouter = express.Router();
app.use("/api/v1/users", userRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "user created successfully",
    data: user,
  });
});

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Developer!");
});

app.post("/post", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Successfully Get/Post",
  });
});

export default app;
