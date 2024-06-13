"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const bike_routes_1 = require("./modules/bike/bike.routes");
const app = (0, express_1.default)();
// const port = 3000
dotenv_1.default.config();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application routes
// app.use('/api/auth', userRoutes);
app.use('/api/bikes', bike_routes_1.BikeRoutes);
// app.use('/api/rentals', rentalRoutes);
app.get("/", (req, res) => {
    res.status(200).send("hello Bike Rental system -----");
});
// Error handler middleware
// app.use(notFound);
// app.use(errorHandler);
exports.default = app;
