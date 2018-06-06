import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

var Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true},

});

UserSchema.plugin(uniqueValidator);
export default mongoose.model('User',UserSchema);
