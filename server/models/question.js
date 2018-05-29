import mongoose, {Schema} from 'mongoose';

const { ObjectId } = Schema.Types

const QuestionSchema = Schema({
    title: {type: string, required: true},
    description: {type: string, required: true},
    icon: {type: string, required: true},
    createdAt: {type: Date, required: true, default: Date.now},
    user: {type: ObjectId, ref: 'User', required: true},
    answers: [{type:ObjectId, ref: 'Answer'}]
});
export default mongoose.model('Question',QuestionSchema);

