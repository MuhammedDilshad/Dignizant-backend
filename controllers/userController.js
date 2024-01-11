import FormSubmission from "../models/userModel.js";

const formController = async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData, "hi");

    const { selectedradio2, selectedOption2, selectedOptions, email } =
      formData;

    const newSubmission = new FormSubmission({
      3: selectedradio2,
      4: selectedOption2,
      5: selectedOptions,
      email: email,
    });

    await newSubmission.save();
    res.status(201).json({ message: "Quiz form data saved successfully!" });
  } catch (error) {
    console.error("Error saving quiz submission:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default formController;
