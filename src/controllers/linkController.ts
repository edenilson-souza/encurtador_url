import { Request, Response } from "express";
import shortid from "shortid";
import Link, { ILink } from "../models/Link";

// Controlador para encurtar uma URL
export const shortenUrl = async (req: Request, res: Response) => {
    const { originalUrl } = req.body;

    // Verificar se a URL já está encurtada
    const existingLink = await Link.findOne({ originalUrl });

    if (existingLink) {
        res.json(existingLink);
    } else {
        // Gerar uma URL curta única
        const shortUrl = shortid.generate();

        // Criar um novo link
        const newLink: ILink = new Link({ originalUrl, shortUrl });

        try {
            await newLink.save();
            res.json(newLink);
        } catch (error) {
            res.status(500).json({ message: "Erro ao encurtar a URL" });
        }
    }
};

// Controlador para redirecionar para a URL original
export const redirectToOriginalUrl = async (req: Request, res: Response) => {
    const { shortUrl } = req.params;

    const link = await Link.findOne({ shortUrl });

    if (link) {
        res.redirect(link.originalUrl);
    } else {
        res.status(404).json({ message: "URL não encontrada" });
    }
};
