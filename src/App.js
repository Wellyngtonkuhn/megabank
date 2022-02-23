import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import "./App.scss"

import Navbar from "./componentes/navbar/Navbar";

import Home from "./views/Home";
import Login from './views/Login';
import DashBoard from "./views/Dashboard";

import Footer from "./componentes/footer/Footer";
import AccountModal from "./componentes/modal/AccountModal";



function App() {

  const [showModal, setShowModal] = useState(false)

  const [name, setName] = useState()
  const [conta, setConta] = useState()
  const isLogged = name && conta 


  console.log('name: ', name)
  console.log('coonta: ', conta)

  const fakeAuth ={
    login(name, conta, cd){
      setName(name)
      setConta(conta)
      setTimeout(cd, 100)
    },
    logOut(cd){
      setName()
      setConta()
      setTimeout(cd, 100)
    }
  }



  return (
    <BrowserRouter>
      <Navbar handleCreateAcc={() => setShowModal(true)} logged={isLogged} auth={fakeAuth}/>

      <Routes>
        <Route path="/" element={<Home handleClick={() => setShowModal(true)} />} />
        <Route path="/login" element={<Login auth={fakeAuth}/>} />
        <Route path="/dashboard" element={<DashBoard name={name} conta={conta} />} />
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </BrowserRouter>
  );
}

export default App;
