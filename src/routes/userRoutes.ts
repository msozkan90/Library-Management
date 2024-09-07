import { Router } from "express";
import { getUsers, createUser, getUser } from "../controllers/userController";
import { borrowBook, returnBook } from "../controllers/borrowController";
import validation from "../middleware/validation";
import { createUpdateUserSchema } from "../validators/userValidators";

const router = Router();

router.get("/", getUsers);
router.post("/", validation(createUpdateUserSchema), createUser);
router.get("/:id", getUser);

router.post("/:userId/borrow/:bookId", borrowBook);
router.post("/:userId/return/:bookId", returnBook);

export default router;
