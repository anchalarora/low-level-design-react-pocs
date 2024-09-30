// App.js
import React, { useEffect, useState } from "react";
import DynamicForm from "./DynamicForm";
import RoleChooser from "./RoleSelector";
import mockConfig from "../../mocks/mockFormConfig.json";
import "./ConfigDrivenForm.css";

function ConfigDrivenForm() {
  const [formConfig, setFormConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("user"); // Default role

  useEffect(() => {
    // Simulate fetching config from a mock file
    const fetchFormConfig = () => {
      const config = mockConfig.forms[role];
      setFormConfig(config);
      setLoading(false);
    };

    fetchFormConfig();
  }, [role]);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted:", formData);
    alert("Form Submitted! Check the console for the form data.");
  };

  if (loading) return <div>Loading...</div>;

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f7fafc", // Tailwind's gray-100
  };

  return (
    <div>
      <RoleChooser onSelectRole={handleRoleChange} />
      {formConfig ? (
        <DynamicForm config={formConfig} onSubmitted={handleFormSubmit} />
      ) : (
        <div>Error loading form</div>
      )}
    </div>
  );
}

export default ConfigDrivenForm;
