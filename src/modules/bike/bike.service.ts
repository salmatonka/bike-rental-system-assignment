import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";


const createBikeIntoDB = async(bikeData: TBike) => {
  const result = await Bike.create(bikeData);
    return result;
  
  };
  const getAllBikesFromDB = async () => {
    // searchTerm: string
    // let find = {}
    
    // if(searchTerm!=undefined && searchTerm != ''){
    //   find = {
    //     $or: [
    //       { name: { $regex: new RegExp(searchTerm, "i") } },
    //       { category: { $regex: new RegExp(searchTerm, "i") } },
    //       { description: { $regex: new RegExp(searchTerm, "i") } },
    //     ],
    //   }
    // }
    const result = await Bike.find();
    return result;
  };
  const updateBikeFromDB = async (
    bikeId: string,
    bike: Partial<TBike>,
  ) => {
    const result = await Bike.findByIdAndUpdate(bikeId, bike, {new: true,}).select({ __v: 0 });
    return result;
  };
  const getSingleBikeFromDB = async (bikeId: string) => {
    const result = await Bike.findById(bikeId).select({ __v: 0 });
    return result;
  };
  const deleteByBikeIdFromDB = async (bikeId: string) => {
    const result = await Bike.findByIdAndDelete(bikeId).select({ __v: 0 });
    return result;
  };

  export const bikeServices = {
    createBikeIntoDB,
    getAllBikesFromDB,
    getSingleBikeFromDB,
    updateBikeFromDB,
    deleteByBikeIdFromDB
  } 