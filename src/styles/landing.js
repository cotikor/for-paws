import styled from "styled-components";

export const LandingContainer = styled.div`
position: fixed;
overflow-y: scroll;
top: 40px;
background: white;
width:100%;
height: 100vh;
display:flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: space-between;
`;

export const JumbotronContainer = styled.section`
position:relative;
width: 100%;
background-color: #f6fbfe;
display:flex;
justify-content: flex-start;
`

export const BackgroundImg = styled.img`
max-width: 100%;
max-height: 70vh;
height: auto;
`

export const TextContainer = styled.div`
position: absolute;
top: 0;
right: 1px;
display:flex;
flex-flow: column nowrap;
align-items:center;
justify-content: center;
@media only screen and (min-width: 600px) {
    bottom: 0;
    right: 10%;
}
@media only screen and (min-width: 768px) {
    top: 0;
    bottom:50%;
    right: 10%;
}
@media only screen and (min-width: 1024px) {
   right: 20%;
   bottom:25%;

}

`
export const LandingH1 = styled.h1` 
color: rgba(18, 28, 50, 0.9);
font-size: 4.2rem;
margin: 10px;
@media only screen and (min-width: 740px) {
font-size: 6.4rem;
}
@media only screen and (min-width: 1024px) {
    font-size: 7.2rem;
}

`

export const ActionButton = styled.button`
border: none;
width:100%;
background:rgba(18, 28, 50, 0.9);
color: white;
border-radius: 20px;
font-size: 2.4rem;
cursor: pointer;
&:hover{
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 70px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 70px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 70px 0px rgba(0,0,0,0.75);
};
`