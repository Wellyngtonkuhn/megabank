import { useState } from "react";

import "./App.scss"

import Navbar from "./componentes/navbar/Navbar";
import Banner from "./componentes/banner/Banner";
import Cartao from "./componentes/cartao/Cartao";
import BlogList from "./componentes/blog/BlogList";
import ButtonComponent from "./componentes/button/ButtonComponent";
import Institucional from "./componentes/institucional/Institucional";
import Footer from "./componentes/footer/Footer";
import AccountModal from "./componentes/modal/AccountModal";



function App() {

  const [showModal, setShowModal] = useState(false)


  return (
    <>
        <Navbar handleCreateAcc={()=>setShowModal(true)} />
        <Banner handleCreateAcc={()=>setShowModal(true)} />
        <Cartao />
        <BlogList />
        <ButtonComponent onClick={()=>setShowModal(true)}>Abra sua conta</ButtonComponent>
        <Institucional handleCreateAcc={()=>setShowModal(true)} />
        <Footer />
        <AccountModal show={showModal} handleClose={()=>setShowModal(false)}/>
    </>
  );
}

export default App;
