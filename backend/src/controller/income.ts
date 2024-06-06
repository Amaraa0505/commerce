import { Request, Response, NextFunction } from "express";
import Income from "../model/income";
import MyError from "../utils/MyError";

export const createIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newIncome = { ...req.body };
    await Income.create(newIncome);
    res.status(201).json({ message: "Income successfully added" });
  } catch (error) {
    res.status(400).json({ message: "falied to create income" });
  }
};

export const getIncomes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const income = await Income.find();
    res.status(201).json({ message: "income successfully found", income });
  } catch (error) {
    res.status(400).json({ message: "failed to get income data" });
  }
};

export const findIncomeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { incomeId } = req.params;
    const findIncome = await Income.findById(Income);
    res.status(201).json({ message: `orlogo oldloo`, incomeId });
    if (!incomeId) {
      throw new MyError(`${incomeId}-tai orlogo oldsongui`, 400);
    }
  } catch (error) {
    res.status(400).json({ message: "orlogo oldsongui" });
  }
};

export const deleteIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("amjillaj bn");
    const { incomeId } = req.params;
    const findIncome = await Income.findByIdAndDelete(incomeId);
    await findIncome?.save();
    res.status(201).json({ message: "income deleted", findIncome });
    if (!findIncome) {
      throw new MyError(`${incomeId}-tai orlogo oldsongui`, 400);
    }
  } catch (error) {
    res.status(400).json({ message: "income failed to delete" });
  }
};

export const updateIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { income } = req.params;
    const findIncome = await Income.findByIdAndUpdate(income);
    await findIncome?.save();
    res.status(201).json({ message: `${income} amjilttai shinchilegdlee` });

    if (!findIncome) {
      throw new MyError(`${income}-tai orlogo oldsongui`, 400);
    }
  } catch (error) {
    res.status(400).json({ mesasge: "failed to update" });
  }
};
