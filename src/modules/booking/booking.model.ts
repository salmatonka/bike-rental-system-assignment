// import { Schema, model } from "mongoose";
// import { TBooking } from "./booking.inerface";

// const BookingSchema = new Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     bikeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bike', required: true },
//     startTime: { type: Date, required: true },
//     returnTime: { type: Date, default: null },
//     totalCost: { type: Number, default: 0 },
//     isReturned: { type: Boolean, default: false },
//   }, { timestamps: true });
  
//   export const Booking = model<TBooking>('Booking', BookingSchema);