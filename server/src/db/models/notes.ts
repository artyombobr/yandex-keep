import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schemaOptions = {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
};

const NotesSchema = new Schema({
  type: {
    type: String,
    default: 'text'
  },
  title: {
    type: String
  },
  text: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
}, schemaOptions);

NotesSchema.statics = {
  getNotes() {
    return this;
  }
};

const NotesModel = mongoose.model('Notes', NotesSchema);

export default NotesModel;
