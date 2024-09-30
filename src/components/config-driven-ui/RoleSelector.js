// RoleSelector.js
import React from "react";

function RoleSelector({ onSelectRole }) {
  const handleChange = (event) => {
    onSelectRole(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  );
}

export default RoleSelector;
