const Header = ({ lang, setLang }) => {
  const handleOnChange = (e) => {
    setLang(e.target.value);
  };
  return (
    <div className="header">
      <a href="/">Home : Infinite Scroll</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/accordion">Accordion</a>
      <a href="/comments">Comments</a>
      <a href="/image-slider">Image Slider</a>
      <a href="/pagination">Pagination</a>
      <a href="/live-chat">Live Chat</a>
      <a href="/config-driven-ui">Config Driven UI</a>
      <a href="/login">Login</a>
      <select value={lang} onChange={handleOnChange}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="sp">Spanish</option>
      </select>
    </div>
  );
};

export default Header;
