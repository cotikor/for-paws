import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const LandingContainer = styled.div`
position: fixed;
overflow-y: scroll;
top: 40px;
background: rgb(18, 28, 50);
width:100%;
height: 100vh;
display:flex;
flex-flow: column nowrap;
align-items: flex-start;
justify-content: space-between;
@media only screen and (min-width: 1200px) {
    overflow: hidden;
}
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
max-height: 50vh;
height: auto;
`

export const TextContainer = styled.div`
position: absolute;
top: 0;
right: 10%;
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
@media only screen and (min-width: 1200px) {
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
@media only screen and (min-width: 1200px) {
    font-size: 7.2rem;
}
`

export const ActionButton = styled(NavLink)`
border: none;
width:100%;
font-family: 'Montserrat',sans-serif;
text-decoration: none;
text-align: center;
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

export const BottomContainer = styled.section`
width: 100%;
background: rgb(18, 28, 50);
display: flex;
flex-flow: column nowrap;
justify-content: space-between;
align-items: center;
@media only screen and (min-width: 1200px) {
    flex-flow: row nowrap;
    align-items: center;
    height: 50vh;
}
`
export const DetailsContainer = styled.section`
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;
width: 100%;
max-height: 100vh;
height: ${props => props.direction === 'right' ? '90vh': null};
padding-bottom: ${props => props.direction === 'left' ? '2.5%': null};
border-top: ${props => props.direction === 'right' ? '1px solid white': null};
border-bottom: ${props => props.direction === 'left' ? '1px solid white': null};
@media only screen and (min-width: 1024px) {
    padding-bottom: 5%;
}
@media only screen and (min-width: 1200px) {
    width: 50%;
    height: 100%;
    padding-bottom:0;
    border:none;
    border-left: ${props => props.direction === 'right' ? '1px solid white': null};
    border-right: ${props => props.direction === 'left' ? '1px solid white': null};
}
`

export const ButtonContainer = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-around;
align-items: stretch;
width: 100%;
height: 20vh;
@media only screen and (min-width: 600px) {
    height: 50vh;
}
@media only screen and (min-width: 768px) {
    height: 20vh;
}
@media only screen and (min-width: 812px) {
    height: 50vh;
}
@media only screen and (min-width: 1200px) {
    align-items: center;
    height: auto;
}
`

export const BottomButton = styled(NavLink)`
display: flex;
justify-content: center;
align-items: flex-end;
color: white;
border: none;
width: 45vw;
height: auto;
font-size: 4rem;
text-decoration: none;
text-align: center;
border-radius:20px;
background-image: url('${(props) => props.image}');
background-size: 100% 100%;
background-repeat: no-repeat;
background-position: center;

@media only screen and (min-width:1024px) {
    width:40%;
    font-size: 6rem;
    height:200px;
    &:hover{
        transform: scale(1.1);
        -webkit-box-shadow: 0px 0px 70px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 70px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 70px 0px rgba(0,0,0,0.75);
    };
}
`

export const LandingH2 = styled.h2`
color: white;
text-align: center;
font-size: 3rem;
margin: 20px 10px;
@media only screen and (min-width: 740px) {
font-size: 5rem;
}
`


export const SpotlightContainer = styled.div`
display: flex;
flex-flow: column-reverse nowrap;
justify-content: space-around;
align-items: center;
width: 100%;
@media only screen and (min-width: 1200px) {
   flex-flow: row nowrap;
   align-items: center;
}
`

export const SpotlightImg = styled.img`
height: auto;
width:80%;
margin-bottom: 2.5%;
border-radius:50%;
@media only screen and (min-width: 600px) {
    width:60%;
 }
@media only screen and (min-width: 1200px) {
    width:40%;
    margin-bottom: 0;
    height: 200px;

 }
`
export const SpotlightP = styled.p`
color: white;
width: 80%;
text-align: justify;
font-size: 1.6rem;
padding-bottom: 10%;
@media only screen and (min-width: 600px) {
    font-size: 2rem;
    width:60%;
 }
@media only screen and (min-width: 1200px) {
    width:50%;
    font-size: 1.4rem;
    padding-bottom: 0;
}
`
