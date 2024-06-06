import { Response, Request, NextFunction } from "express";
import Product from "../model/product";
import cloudinary from "../utils/cloudinary";
import MyError from "../utils/MyError";

export const addProduct = async (
  req: Request,
  // & { file: { path: string } },
  res: Response,
  next: NextFunction
) => {
  try {
    const newProduct = { ...req.body };
    // if (req.file) {
    //   const { secure_url } = await cloudinary.uploader.upload(req.file.path);
    //   newProduct.image = secure_url;
    // }

    await Product.create(newProduct);
    res.status(201).json({ message: "product successfully added" });
  } catch (error) {
    res.status(400).json({ message: "failed to add product" });
  }
};

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await Product.find();

    res.status(201).json({ message: "products", products });
  } catch (error) {
    res.status(400).json({ message: "failed to get products" });
  }
};

export const findProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const findProduct = req.params;
    const product = Product.findById(findProduct);
    if (!findProduct) {
      throw new MyError(`${findProduct} oldsongui`, 400);
    }

    res.status(201).json({ message: "product", product });
  } catch (error) {
    res.status(400).json({ message: "failed to get product" });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.params);
    const { product } = req.params;
    const findProduct = Product.findByIdAndUpdate(product);
    if (!findProduct) {
      throw new MyError(`${findProduct} oldsongui`, 400);
    }

    res
      .status(201)
      .json({ message: "product successfully updated", findProduct });
  } catch (error) {
    res.status(400).json({ message: "failed to update product" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { product } = req.params;
    console.log("hahahahha", product);
    const findProduct = Product.findByIdAndDelete(product);

    if (!findProduct) {
      throw new MyError(`${findProduct} oldsongui`, 400);
    }

    res.status(201).json({ message: "product successfully deleted", product });
  } catch (error) {
    res.status(400).json({ message: "failed to delete product" });
  }
};
