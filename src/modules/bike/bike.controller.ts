import { Request, Response } from "express";
import { bikeValidationSchema } from "./bike.zod.validation";
import { bikeServices } from "./bike.service";

const createBike = async (req: Request, res: Response) => {
   console.log(req.body)
   try {
    const { bike: bikeData } = req.body;
    const zodParsedData = bikeValidationSchema.parse(bikeData);

    const result = await bikeServices.createBikeIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
  
  };

  const getAllBikes = async (req: Request, res: Response) => {
    try {
      const result = await bikeServices.getAllBikesFromDB();
  
      res.status(200).json({
        success: true,
        message: 'Students are retrieved succesfully',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    }
  };

  const getSingleBike = async (req: Request, res: Response) => {
    const { bikeId } = req.params;
    try {
      
      
      const result = await bikeServices.getSingleBikeFromDB(bikeId);
  
      if (result) {
        res.status(200).send({
          success: true,
          message: "Product fetched successfully!",
          data: result,
        });
      } else {
        res.status(400).send({
          success: false,
          message: "Product not found!",
          data: result,
        });
      }
    } catch (err: any) {
      res.status(400).send({
        success: false,
        message: err.message || "Something is wrong",
        error: err,
      });
    }
  };
  
  const updateBike = async (req: Request, res: Response) => {
    try {
      const { bikeId } = req.params;
      const bike = req.body;
  
    //   const { error } = bikeValidationSchema.validate(req.body);
  
    //   if (error) {
    //     return res
    //       .status(400)
    //       .json({ success: false, message: error.details[0].message });
    //   }
  
      const result = await bikeServices.updateBikeFromDB(
        bikeId,
        bike,
      );
  
      if (result) {
        res.status(200).send({
          success: true,
          message: "bike updated successfully!",
          data: result,
        });
      } else {
        res.status(400).send({
          success: false,
          message: "bike not found to update!",
          data: result,
        });
      }
    } catch (err: any) {
      res.status(400).send({
        success: false,
        message: err.message || "Something is wrong",
        error: err,
      });
    }
  };
  
  const deleteBike = async (req: Request, res: Response) => {
    try {
      const { bikeId } = req.params;
  
      const result = await bikeServices.deleteByBikeIdFromDB(bikeId);
  
      if (result) {
        res.status(200).send({
          success: true,
          message: "bike deleted successfully!",
          data: result,
        });
      } else {
        res.status(400).send({
          success: false,
          message: "bike not found to delete!",
          data: result,
        });
      }
    } catch (err: any) {
      res.status(400).send({
        success: false,
        message: err.message || "Something is wrong",
        error: err,
      });
    }
  };


  export const bikeControllers = {
    createBike,
    getAllBikes,
    getSingleBike,
    updateBike,
    deleteBike
  };