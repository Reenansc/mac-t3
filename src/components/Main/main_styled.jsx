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

export const SectionOne = styled.section`
background-color: #FFC72C ;
height: 85vh;
${center}
flex-direction: column;
h1{
    font-size: 50px;
    /* border: solid 1px red; */
    width: 34vw;
}
`;


export const BoxOne = styled.div`
/* border: solid 1px red; */
padding-top: 10vh;
width: 90vw;
${center}
justify-content: space-around;
img{
    /* border: solid 1px red; */
    width: 25vw;
    height: 50vh;
}
span{
    color: red;
}
`;

export const BoxTwo = styled.div`

padding-top: 5vh;
/* border: solid 1px red; */
width: 30vw;
${center}
justify-content: space-between;

`;

export const SectionTwo = styled.section`
background-color: #FEB706;
height: 70vh;
${center}
flex-direction: column;
justify-content: space-around;
h2{
    font-size: 36px;
    color: white;
}
`
export const Center = styled.div`
/* border: solid 2px red; */
width: 70vw;
${center}
justify-content: space-around;
`
export const Card = styled.div`
width: 18vw;
height: 40vh;
text-align: center;
background-color: white;
border-radius: 13px;
img{
    width: 18vw;
}
p{
    
    font-weight: bold;
   /* border: solid 2px green;  */
   height: 9vh;
   ${center}
}
button{
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
}
`