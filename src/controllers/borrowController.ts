import { Request, Response, NextFunction } from "express";
import { BorrowService } from "../services/borrowService";

const borrowService = new BorrowService();

export const borrowBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, bookId } = req.params;
    const borrow = await borrowService.borrowBook(
      Number(userId),
      Number(bookId)
    );
    res.status(201).json(borrow);
  } catch (error) {
    next(error);
  }
};

export const returnBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { score } = req.body;
    const { userId, bookId } = req.params;
    const borrow = await borrowService.returnBook(
      Number(userId),
      Number(bookId),
      Number(score)
    );
    res.json(borrow);
  } catch (error) {
    next(error);
  }
};
