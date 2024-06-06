import { Request, Response, NextFunction } from "express";
import Order from "../model/order";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newOrder = { ...req.body };
    const order = await Order.create(newOrder);
    res.status(201).json({ message: "order successfully added" });
  } catch (error) {
    res.status(400).json({ message: "failed to add order" });
  }
};

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await Order.find();
    res.status(201).json({ message: "orders", orders });
  } catch (error) {
    res.status(400).json({ message: "failed to get orders" });
  }
};
