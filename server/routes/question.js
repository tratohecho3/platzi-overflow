import express from 'express';

const app = express.Router();
const question = {
    _id: 1,
    title: 'Como hago para imprimir un string',
    description: 'Tengo una duda...',
    createdAt: new Date(),
    icon: 'devicon-android-plain',
    answers: [],
    user: {
        firstName: 'Sasha',
        lastName: 'Peres',
        email: 'programador@gmail.com',
        password: '12345'
    }
};

const questions = new Array(10).fill(question);

app.get('/',(req,res) => {
    setTimeout(()=> res.status(200).json(questions),1000 )
    })
app.get('/:id', (req,res) => {
    const { id } = req.params
    console.log(id)
    const q = questions.find(({ _id }) => _id === +id)
    res.status(200).json(q)

})

app.post('/', (req,res) => {
    const question = req.body;
    question.id =  +new Date();
    question.user = {
        firstName: 'Pedro',
        lastName: 'Peres',
        email: 'programador@gmail.com',
        password: '12345'
    }
    question.createdAt = new Date();
    question.answers = []; 
    questions.push(question);
    res.status(201).json(question)
})


export default app;

