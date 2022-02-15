import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss"

import Navbar from "./componentes/navbar/Navbar";

import Home from "./views/Home";
import Login from './views/Login'

import Footer from "./componentes/footer/Footer";
import AccountModal from "./componentes/modal/AccountModal";




function App() {

  const [showModal, setShowModal] = useState(false)


  return (
    <BrowserRouter>
      <Navbar handleCreateAcc={() => setShowModal(true)} />

      <Routes>
        <Route path="/" element={<Home handleClick={() => setShowModal(true)} />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </BrowserRouter>
  );
}

export default App;
