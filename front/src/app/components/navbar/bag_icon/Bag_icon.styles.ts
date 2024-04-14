import styled from "styled-components"

const ButtonCart = styled.button`
    cursor: pointer;
`
const Image = styled.img`
    width:20px;
    margin: 0px 20px;
    transition:0.3s ease-in-out;
    &:hover{
        scale: 1.1;
    }
`
export {
    ButtonCart,
    Image
}