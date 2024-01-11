import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  email: { type: String, required: true },
  1: String,
  2: String,
  3: String,
  4: String,
  5: [String],
});

const FormSubmission = mongoose.model("FormSchema", FormSchema);

export default FormSubmission;
