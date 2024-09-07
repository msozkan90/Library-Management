import { Router } from "express";
import { getBooks, createBook, getBook } from "../controllers/bookController";
import validation from "../middleware/validation";
import { createUpdateBookSchema } from "../validators/bookValidators";

const router = Router();

router.get("/", getBooks);
router.post("/", validation(createUpdateBookSchema), createBook);
router.get("/:id", getBook);

export default router;
