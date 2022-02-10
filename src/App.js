

import "./App.scss"
import Navbar from "./componentes/navbar/Navbar";
import Banner from "./componentes/banner/Banner";
import Cartao from "./componentes/cartao/Cartao";
import BlogList from "./componentes/blog/BlogList";
import ButtonComponent from "./componentes/button/ButtonComponent";
import Institucional from "./componentes/institucional/Institucional";
import Footer from "./componentes/footer/Footer";





function App() {
  return (
    <>
        <Navbar />
        <Banner />
        <Cartao />
        <BlogList />
        <ButtonComponent>Abra sua conta</ButtonComponent>
        <Institucional />
        <Footer />
    </>
  );
}

export default App;
