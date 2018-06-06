import Debug from 'debug'
import { Question } from '../models'

const debug = new Debug('platzi-overflow:db-api:question')

export default {
  findAll: async () => {
    debug('Finding all questions')
    console.log('lo intento')
    return await Question.find().populate('answers')
  },
  findById: async (_id) => {
    debug(`Finding question by Id ${id}`);
    return await Question
      .findOne({_id})
      .populate('user')
      .populate({
        path: 'answers',
        options: {sort:'-createdAt'},
        populate: {
          path: 'user',
          model: 'User'
        }
      
      })
      

  }
}