import { LANG } from "../utils/langConfig";

const Login = ({ lang }) => {
  const data = LANG[lang].login;
  return (
    <div>
      <h1>{data.title}</h1>
      <form className="any-form">
        <label>
          {data.emailLabel}
          <input type="text" name="email" required />
        </label>
        <label>
          {data.passwordLabel}
          <input type="email" name="password" required />
        </label>
        <button type="submit">{data.submitButton}</button>
      </form>
    </div>
  );
};

export default Login;
