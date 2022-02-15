import Banner from '../componentes/banner/Banner'
import Cartao from "../componentes/cartao/Cartao";
import BlogList from "../componentes/blog/BlogList";
import ButtonComponent from "../componentes/button/ButtonComponent";
import Institucional from "../componentes/institucional/Institucional";



export default function Home({handleClick}){


  return (
    <>
        
        <Banner onClick={handleClick} />
        <Cartao />
        <BlogList />
        <ButtonComponent onClick={handleClick}>Abra sua conta</ButtonComponent>
        <Institucional onClick={handleClick} />

    </>
  );
}

