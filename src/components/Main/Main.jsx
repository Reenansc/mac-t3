import * as S from "./main_styled"
import bigmac from "../../assets/bigmac.png"
import batata from "../../assets/batata.png"
import sorvete from "../../assets/sorvete.png"
import { useState } from "react"
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.png"
import banner from "../../assets/banner.png"
import Card from "./Card"

export default function Main() {

  const [imagem,setImagem] = useState(bigmac);

  function imagem1(){
    setImagem(bigmac)
  };

  function imagem2(){
    setImagem(batata)
  };

  function imagem3(){
    setImagem(sorvete)
  };
  
  return (
    <main>
       <S.SectionOne>
        <S.BoxOne>
            <img src={imagem} alt="Imagem do que voce quer comer" />
            <h1>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>?</h1>;
        </S.BoxOne>
        <S.BoxTwo>
            <img onClick={imagem1} src= {bigmac} alt="" />
            <img onClick={imagem2} src= {batata} alt="" />
            <img onClick={imagem3} src= {sorvete} alt="" />
        </S.BoxTwo>
    </S.SectionOne>
    <S.SectionTwo>
    <h2>Promoção</h2>
            <S.Center>
           <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
           <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
           <Card imagem={banner} texto={"Confira as medidas que o Méqui adotou!"} />
            </S.Center>
    </S.SectionTwo>
    </main>
   
  );
}
