const express = require("express");
const { isAuthenticated,isAdmin } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const router = express.Router();
const Customer = require("../models/Customer.js");
const ErrorHandler = require("../utils/ErrorHandler");

// create product
router.post(
  "/create-customer",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const customerData = req.body;
      // customerData.billingAddress.state=req.body.billingAddress.state.label;
      // customerData.billingAddress.city=req.body.billingAddress.city.label;
      // customerData.shippingAddress.state=req.body.shippingAddress.state.label;
      // customerData.shippingAddress.city=req.body.shippingAddress.city.label;
      const customer = await Customer.create(customerData);
      
      res.status(201).json({
        success: true,
        customer,
      });
    } catch (error) {
      
      return next(new ErrorHandler(error, 400));
    }
  })
);


router.put(
  "/edit-customer",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const customerData = req.body;
      const customer = await Customer.findByIdAndUpdate(customerData._id,customerData);
      res.status(201).json({
        success: true,
        customer,
      });
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler(error, 400));
    }
  })
);

router.delete(
  "/delete-customer",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
     
      const customer = await Customer.findByIdAndRemove(req.query.id);
      res.status(201).json({
        success: true,
        customer,
      });
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler(error, 400));
    }
  })
);


router.get(
  "/all-customers",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const customers = await Customer.find().sort({
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        customers,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

router.get(
  "/customerDetail",
  isAuthenticated,
  isAdmin("admin"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const customer = await Customer.findById(req.query.id);
      res.status(201).json({
        success: true,
        customer
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
