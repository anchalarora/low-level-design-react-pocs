import "./MultiStepForm.css";
const UserForm = (props) => {
  const {
    index,
    handleInputChange,
    formData,
    forms,
    handleSubmit,
    handleBack,
  } = props;

  return (
    <form className="container" onSubmit={handleSubmit}>
      {index > 0 && (
        <a href="/" onClick={handleBack}>
          Back
        </a>
      )}
      <label className="form-label">{forms[index].label}</label>
      <input
        required
        value={formData[forms[index].id]}
        id={forms[index].id}
        placeholder={forms[index].placeHolder}
        type={forms[index].inputType}
        onChange={handleInputChange}
      />

      <button className="form-button">{forms[index].buttonName}</button>
    </form>
  );
};
export default UserForm;

// const UserForm = (props) => {
//   const {
//     handleSubmit,
//     index,
//     handleBack,
//     forms,
//     formData,
//     handleInputChange,
//   } = props;
//   return (
//     <form className="container" onSubmit={handleSubmit}>
//       {index > 0 && (
//         <a href="/" onClick={handleBack}>
//           Back
//         </a>
//       )}
//       <label>{forms[index].label}</label>
//       <input
//         required
//         value={formData[forms[index].id]}
//         id={forms[index].id}
//         onChange={handleInputChange}
//         type={forms[index].inputType}
//         placeholder={forms[index].placeholder}
//       />
//       <button>{forms[index].buttonName}</button>
//     </form>
//   );
// };

// export default UserForm;
