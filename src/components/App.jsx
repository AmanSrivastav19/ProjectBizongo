import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import { StyledEngineProvider } from "@mui/material";
import Whatsapp from "./Home/Whatsapp";
import ContactUs from "./Home/ContactUs";
import LandingSection from "./Home/LandingSection";
import About from "./About";
import SupplyChain from "./SupplyChain";
import Digitalvendor from "./Digitalvendor";
import Auction from "./Auction";
import Desworks from "./Home/Desworks";
import Procure from "./Platform/Procure";
import Partner from "./Platform/Partner";
import ArtWorks from "./Platform/ArtsWorks";
import Ecommerce from "./Industries/Ecommerce";
import Consumer from "./Industries/Consumer";
import Pharma from "./Industries/Pharma";
import PersonalCare from "./Industries/PersonalCare";
import ConsumerStaples from "./Industries/ConsumerStaples";
import Fashion from "./Industries/Fashion";
import Customer from "./Resources/Customer";
import Webinar from "./Resources/Webinar";
import Blog from "./Resources/Blog";
import Catalogue from "./Catalogue/Catalogue"
import Lifestyle from "./ImageLink/Lifestyle"
import Industries from "./ImageLink/Industries"



export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingSection/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/supply" element={<SupplyChain/>} />
          <Route path="/digital" element={<Digitalvendor/>} />
          <Route path="/supplyautoamtion" element={<SupplyChain/>} />
          <Route path="/auction" element={<Auction/>} />
          <Route path="/desworks" element={<Desworks/>} />
          <Route path="/procure" element={<Procure/>} />
          <Route path="/partner" element={<Partner/>} />
          <Route path="/artwork" element={<ArtWorks/>} />
          <Route path="/ecommerce" element={<Ecommerce/>} />
          <Route path="/consumer" element={<Consumer/>} />
          <Route path="/pharma" element={<Pharma/>} />
          <Route path="/personalcare" element={<PersonalCare/>} />
          <Route path="/Staples" element={<ConsumerStaples/>} />
          <Route path="/fashion" element={<Fashion/>} />
          <Route path="/fashion" element={<Fashion/>} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/webinar" element={<Webinar/>} />
          <Route path="/fromtheblog" element={<Blog/>} />
          <Route path="/catalogue" element={<Catalogue/>} />
          <Route path="/whatsapp" element={<Whatsapp/>} />
          <Route path="/whatsapp" element={<Whatsapp/>} />
          <Route path="/lifestyle" element={<Lifestyle/>} />
          <Route path="/industries" element={<Industries/>} />
          <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StyledEngineProvider>
  );
}
