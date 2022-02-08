

import "./App.scss"
import Navbar from "./componentes/navbar/Navbar";
import Banner from "./componentes/banner/Banner";
import Cartao from "./componentes/cartao/Cartao";
import BlogList from "./componentes/blog/BlogList";
import ButtonComponent from "./componentes/button/ButtonComponent";





function App() {
  return (
    <>
        <Navbar />
        <Banner />
        <Cartao />
        <BlogList />
        <ButtonComponent>Abra sua conta</ButtonComponent>
    </>
  );
}

export default App;
