import express, { Application, Request, Response, NextFunction } from "express";
import { join } from "path";
const PORT = 3000;
const app: Application = express();

app.use((req: Request, _: Response, next: NextFunction) => {
  console.log(req.url);
  next();
});

app.use(express.static(join(__dirname, "public")));
app.use(express.json());

// Route pour la page d'accueil ou route par défaut/principale
app.get("*", (_: Request, res: Response) => {
  res.sendFile(join(__dirname, "../index.html"));
});


app.listen(PORT, () => {
  console.log(
    `listening on port ${PORT} you can open your browser on http://localhost:${PORT}`
  );
});


