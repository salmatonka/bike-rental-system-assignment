"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //crating a schema validation using joi
        const { bike: bikeData } = req.body;
        // console.log(productData)
        //data validation using joi
        //   const { value } = bikevalidationSchema.validate(bikeData);
        // console.log(error,value)
        const result = yield BikeServices.createProductIntoDB(bikeData);
        if (result) {
            res.status(200).send({
                success: true,
                message: "Product created successfully!",
                data: result,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: "Product not created!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(400).send({
            success: false,
            message: err.message || "Something is wrong",
            error: err,
        });
    }
});
