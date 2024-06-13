"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidationSchema = void 0;
const zod_1 = require("zod");
// Define the Zod schema for Bike
// export const bikevalidationSchema = z.object({
//   name: z.string().nonempty("Name is required"),
//   description: z.string().nonempty("Description is required"),
//   pricePerHour: z.number().min(0, "Price per hour must be a positive number"),
//   isAvailable: z.boolean().optional().default(true),
//   cc: z.number().min(50, "CC must be at least 50"),
//   year: z.number().int().min(1900, "Year must be at least 1900").max(new Date().getFullYear(), `Year cannot be in the future`),
//   model: z.string().nonempty("Model is required"),
//   brand: z.string().nonempty("Brand is required"),
// });
exports.bikeValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty("Name is required"),
    description: zod_1.z.string().nonempty("Description is required"),
    pricePerHour: zod_1.z.number().min(0, "Price per hour must be a positive number"),
    isAvailable: zod_1.z.boolean().optional().default(true),
    cc: zod_1.z.number().min(50, "CC must be at least 50"),
    year: zod_1.z.number().int().min(1900, "Year must be at least 1900").max(new Date().getFullYear(), "Year cannot be in the future"),
    model: zod_1.z.string().nonempty("Model is required"),
    brand: zod_1.z.string().nonempty("Brand is required"),
});
