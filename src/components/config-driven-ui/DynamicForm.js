// DynamicForm.js
import React, { useState } from "react";
import "./ConfigDrivenForm.css";

const DynamicForm = ({ config, onSubmitted }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(...formValues);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitted(formValues); // Call onSubmit callback with the form values
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>{config.title}</h2>
        {config.fields.map((field) => (
          <div key={field.name} style={{ marginBottom: "10px" }}>
            <label className="field-label">{field.label}</label>
            <input
              className="form-input"
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formValues[field.name] || ""}
              onChange={handleChange}
              required={field.validation?.required}
              minLength={field.validation?.minLength}
            />
          </div>
        ))}
        <button className="submit-button" type="submit">
          {config.submitButton.label}
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
