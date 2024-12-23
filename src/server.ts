import { log } from 'console';
import express, { Application, NextFunction } from 'express';
import { join } from 'path';
const PORT = 3000;
const app: Application = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});
app.use(express.static(join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(
    `listening on port ${PORT} you can open your browser on http://localhost:${PORT}`
  );
});

console.log('uppp');
