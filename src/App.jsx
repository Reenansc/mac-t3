
import * as S from "./components/Header/header_styled";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from "./components/Footer/Footer"


export default function App() {
  return (
    <>
     <S.GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}
