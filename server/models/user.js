import mongoose, {Schema} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'
const UserSchema = Schema({
    firstName: {type: string, required: true},
    lastName: {type: string, required: true},
    email: {type: string, required: true, unique: true, index: true},
    password: {type: string, required: true},

});

UserSchema.plugin(uniqueValidator);
export default mongoose.model('User',UserSchema);

