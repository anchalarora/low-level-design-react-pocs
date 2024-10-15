import { useState } from "react";
import "./MultiStepForm.css";
import FormDetails from "./FormDetails";
import UserForm from "./UserForm";

const MultiStepForm = () => {
  // extandable json
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeHolder: "Your Name...",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      buttonName: "Next",
      placeHolder: "Your Email...",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeHolder: "",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      buttonName: "Submit",
      placeHolder: "",
    },
  ];

  const [forms, setForms] = useState(data);

  const [index, setIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      // edge case
      console.log("form submitted");
      setIsFormSubmitted(true);
    } else setIndex((index) => index + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((index) => index - 1);
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <div className="app">
      {!isFormSubmitted ? (
        <UserForm
          index={index}
          handleBack={handleBack}
          handleInputChange={handleInputChange}
          formData={formData}
          forms={forms}
          handleSubmit={handleSubmit}
        />
      ) : (
        <FormDetails formData={formData} handleBack={handleBack} />
      )}
    </div>
  );
};

export default MultiStepForm;
