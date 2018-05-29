import mongoose, {Schema} from 'mongoose';

const AnswerSchema = Schema({
    description: {type: string, required: true},
    createdAt: {type: Date, default:Date.now, required: true},
});
export default mongoose.model('Answer',AnswerSchema);

