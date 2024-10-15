const FormDetails = (props) => {
  const { formData, handleBack } = props;
  return (
    <div>
      <h1>Success!!</h1>
      <hr />
      <span>Name : {formData.name}</span>
      <br />
      <span>DOB : {formData.dob}</span>
      <br />
      <span>Email : {formData.email}</span>
      <br />
      <span>Password : {formData.password}</span>
      <br />
    </div>
  );
};

export default FormDetails;
