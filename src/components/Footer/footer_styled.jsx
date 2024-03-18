import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`
const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Footer = styled.footer`
/* border: solid 1px red; */
height: 10vh;
${center}
justify-content: space-between;
width: 96vw;
`

export const SectionThree = styled.section`
${center}
width: 20vw;
justify-content: center;
gap: 30px;
img{
    width: 23.53px;
}
p{
    padding-top: 2px;
}
`


export const SectionFour = styled.section`
width: 20vw;
${center}
justify-content: space-around;

`