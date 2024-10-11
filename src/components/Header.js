const Header = ({ lang, setLang }) => {
  const handleOnChange = (e) => {
    setLang(e.target.value);
  };
  return (
    <div className="header">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <select value={lang} onChange={handleOnChange}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="sp">Spanish</option>
      </select>
    </div>
  );
};

export default Header;
