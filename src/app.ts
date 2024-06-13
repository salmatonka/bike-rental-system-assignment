import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { bikeRoutes } from "./modules/bike/bike.routes";

const app: Application = express();
// const port = 3000
dotenv.config();
//parsers
app.use(express.json());
app.use(cors());


//application routes
// app.use('/api/auth', userRoutes);
app.use('/api/bikes', bikeRoutes);
// app.use('/api/rentals', rentalRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello Bike Rental system -----");
});

// Error handler middleware
// app.use(notFound);
// app.use(errorHandler);

export default app;