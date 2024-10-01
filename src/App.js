import React, { useState } from "react";
import "./App.css";
import Body from "./components/infinite-scroll/Body";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoute";
import Accordion from "./components/accordion/Accordion";
import Comments from "./components/comments/Comments";
import ImageSlider from "./components/image-slider/ImageSlider";
import Pagination from "./components/pagination/Pagination";
import LiveChat from "./components/live-chat/LiveChat";
import ConfigDrivenForm from "./components/config-driven-ui/ConfigDrivenForm";

// shimmer ui => loading atate while making an api call.
// instead of showing loading progress bar ,
// we show dummy layout. => after we get api response we show the actual data on the same layout.
function App() {
  const [lang, setLang] = useState("en");
  return (
    <div className="App">
      <Header lang={lang} setLang={setLang} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/about" element={<About lang={lang} />} />
          </Route>
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="/login" element={<Login lang={lang} />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/config-driven-ui" element={<ConfigDrivenForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
