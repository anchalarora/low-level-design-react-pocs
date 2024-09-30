import { LANG } from "../utils/langConfig";

const Contact = ({ lang }) => {
  const data = LANG[lang].contact;

  return (
    <div className="any-form">
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
      <form>
        <label>
          {data.nameLabel}
          <input type="text" name="name" required />
        </label>
        <label>
          {data.emailLabel}
          <input type="email" name="email" required />
        </label>
        <label>
          {data.messageLabel}
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">{data.submitButton}</button>
      </form>
    </div>
  );
};

export default Contact;
