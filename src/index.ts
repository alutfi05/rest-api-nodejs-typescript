import express, { Application } from 'express';

const app: Application = express();
const port: Number = 4000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
