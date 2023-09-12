import { Router } from "express";
import { shortenUrl, redirectToOriginalUrl } from "../controllers/linkController";

const router = Router();

// Rota para encurtar uma URL
router.post("/shorten", shortenUrl);

// Rota para redirecionar para a URL original
router.get("/:shortUrl", redirectToOriginalUrl);

export default router;
