

import express from 'express';
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
    const ANSWER = `someone pinged ${{PORT}}/ping at ${new Date().toLocaleDateString()}`
    console.log(ANSWER)
    res.send(ANSWER);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});