const express = require("express");
const OrderService = require("../services/order.service");
const validatorHandler = require("../middlewares/validator.handler");

const {
  getOrderSchema,
  createOrderSchema,
} = require("../schemas/order.schema");
const router = express.Router();
const service = new OrderService();

router.post("/",
  validatorHandler(createOrderSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(200).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  }
);


router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;
