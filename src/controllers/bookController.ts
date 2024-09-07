import { Request, Response, NextFunction } from "express";
import { BookService } from "../services/bookService";

const bookService = new BookService();

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
};

export const getBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBookById(Number(id));
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;
    const book = await bookService.createBook(name);
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};
