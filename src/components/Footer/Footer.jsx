import logo from "../../assets/logo.png"
import apple from "../../assets/apple.png"
import play from "../../assets/play.png"
import * as S from "./footer_styled"

export default function Footer() {
  return (
    <S.Footer>
        <S.SectionThree>
            <img src={logo} alt="" />
            <p>© McDonalds 2024</p>
        </S.SectionThree>
        <S.SectionFour>
             <a href="https://play.google.com/store/apps/details?id=com.mcdo.mcdonalds&hl=pt_BR&gl=US"><img src={play} alt="" /></a>
             <a href="https://apps.apple.com/br/app/mcdonalds-cupons-e-delivery/id1114009187"><img src={apple} alt="" />  </a> 
        </S.SectionFour>
    </S.Footer>
   
  );
}
