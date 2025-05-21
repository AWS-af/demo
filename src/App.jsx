import React from "react";
import Contacts from "./components/Contacts";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import Home from "./components/Home";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
  );
}
