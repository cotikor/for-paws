import styled from "styled-components";

export const DonateContainer = styled.form`
display: flex;
box-shadow: 0px 0px 50px 5px;
flex-flow: column nowrap;
align-items: center;
width: 90vw;
max-width: 800px;
max-height: 85vh;
border: 1px solid white;
overflow-x: hidden;
background: rgba(18, 28, 50, 0.8);
@media only screen and (orientation: landscape){
    max-height: 70vh;
}
`

export const StripeInputContainer = styled.section`
background: none;
border: 1px solid white;
border-radius: 6px;
padding: 2.5%;
color: white;
`

