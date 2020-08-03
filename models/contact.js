const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const contacts = new Schema({
  id: ObjectId,
  name: {
  	type: String,
  	default: 'Anonymous',
  },
  email: String,
  message: String,
  date: {type: Date, default: Date.now }
});