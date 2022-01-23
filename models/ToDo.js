const { Schema, model } = require('mongoose');

const ToDoSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User"},
  content: { type: String, require: true },
  complete: { type: Boolean, default: false },
  completeAt: { type: Date }
}, {
  timestamps: true
});

const ToDo = model("ToDo", ToDoSchema);
module.exports = ToDo;