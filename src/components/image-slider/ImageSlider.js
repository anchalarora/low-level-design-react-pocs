import { useState, useEffect } from "react";
import "./ImageSlider.css";

const data = [
  {
    id: 1,
    imageurl:
      "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    imageurl:
      "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    imageurl:
      "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    imageurl:
      "https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  { id: 5, imageurl: "https://picsum.photos/300/200?random=5" },
  {
    id: 6,
    imageurl:
      "https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  { id: 7, imageurl: "https://picsum.photos/300/200?random=7" },
  {
    id: 8,
    imageurl:
      "https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const leftArrow = "https://cdn-icons-png.flaticon.com/512/271/271220.png";

const rightArrow =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAADV1dXY2Nirq6usrKynp6eHh4f6+vra2tpzc3OcnJxbW1sVFRULCwtRUVHHx8d+fn7n5+chISFBQUHx8fFJSUnQ0NBnZ2eRkZHv7++6urrg4OAiIiIbGxtVVVU4ODgvLy+T/FYDAAADQUlEQVR4nO2d7VKjQBBFB80KLPmAGNQka9T3f0mjf8SV4MwsW+29fe8DpPpUn6EbqCIhZKeqm+Xzav2yKdsq/1d+bqpmVXyk21rXM3sWt8XnlNYVzZzfxZfseuuiZkx/9xWwKNbX1nXNl+UY4Dk0iOUFQBrE+4uARXFlXdwsGT2ETIjtFCCFqA/ThPiI/ekbQnhRp64zHIg33xOCi7qPIMTuYhdDCI14eaFhEbWJIwRGPEYS4oq6jSXERdxFI6KKGjUuoBEP8YSooiY0EbSLVQIhKGKdgogpavRMxEVcpCDW1tVmJeYeChwxqYsORHWAiDk0ks4iJqJEdddFB4gORHWAiCmqhoY7UR0gYoqadBYddNEBIqaoQnQnqgNETFG1wElUiAjRnagOEDHfaei1jTtRHSBiDg0tcBIVIkJ0J6oDRAeiYi5wvyQqAWJSFx2cRQeImKKqi+4QHYjqANGBqJiIWuDcdRETUVdUd4iYt8QOEDU0GBA1NBgQdRYZuihEd6JiIiZdbjC3Gy1wDKLqLH6Og6Hxx7rarKR08RHzQ74piBvrYvOSIurRuti8JHTxZF1rZhK6eGNda2biu/hkXWpu4rt4sC41N9FdbK0rzU5sFxvrQvMT2cW9dZ3/kJF/IxhJZ11mfuh7SH8O6a+l9POQfqeh30vp7y3o7w/p7/Hpn9PQP2ujf15K/8yb/r0F/bsn+veH9GdQgMPQjwlEQI0JVx1EBKS/iuoMDkO/ydAD0iuKCKgxgQ6oMYHeQQG6UpQekF5RekAp+gOjVQ1dUa1qw9Df8NID0itKD0g/JugBERWl/xa0FEVXlB6Q/r8RtKqhKyrAYejHBD0goqJa1VwBIioqQFeK0gMiKkr/n85S1FUHEQG1qrkCRFRUgK4UpQdEVFRjwhUgoqL0gHr5gg54ZFe0ZgesUgARx0TYswMeyBVNaiFkB0PYsQNuyRVNmIWogKHhVvSckh0wdNyKhshhgQwYdd8ErOg59+QdDKE/kQOG8ECt6FtadsAQ7qgVfcvUtYYCcGqtYVD0PUt2wNCPHsU1D2AY/cr/DvETuBNZ3P4FWFpXNHuqZjXg67bW9fyPVHWzfF6tXzZlW1nXMpFXXaoxp0OAvT8AAAAASUVORK5CYII=";

const ImageSlider = () => {
  const [active, setIsActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      handlleRightArrowClick();
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const handlleLeftArrowClick = () => {
    setIsActive((active) => (active > 0 ? active - 1 : data.length - 1));
  };

  const handlleRightArrowClick = () => {
    setIsActive((active) => (active + 1) % data.length);
  };

  return (
    <div className="image-slider-container">
      <img
        className="arrow left-arrow"
        src={leftArrow}
        alt="left-arrow"
        onClick={handlleLeftArrowClick}
      />
      <img className="img" src={data[active].imageurl} alt="wallpaper" />
      <img
        className="arrow right-arrow"
        src={rightArrow}
        alt="right-arrow"
        onClick={handlleRightArrowClick}
      />
    </div>
  );
};

export default ImageSlider;
