import express from 'express';

const app = express.Router();
const question = {
    id: 1,
    title: 'Como hago para imprimir un string',
    description: 'Tengo una duda...',
    createdAt: new Date(),
    icon: 'devicon-android-plan',
    answers: [],
    user: {
        firstName: 'Sasha',
        lastName: 'Peres',
        email: 'programador@gmail.com',
        password: '12345'
    }
};

const questions = new Array(10).fill(question);

app.get('/',(req,res) => res.status(200).json(questions))
app.get('/:id', (req,res) => res.status(200).json(question))
export default app;