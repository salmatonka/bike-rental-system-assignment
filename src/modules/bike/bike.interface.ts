import { Model } from "mongoose";
import { TUser } from "../user/user.interface";

export type TBike = {
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable?: boolean;
  cc: number;
  year: number;
  model: string;
  brand: string;
}

// export interface BikeModel extends Model<TUser> {
//   isUserExists(productId: string): Promise<TUser | null>;
// }
  