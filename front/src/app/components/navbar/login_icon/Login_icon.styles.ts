import styled from "styled-components";

const ButtonIcon = styled.button `
    cursor: pointer;
`
const Image = styled.img `
    width:18px;
    margin: 0px 20px;
    transition:0.3s ease-in-out;
    &:hover{
        scale: 1.1;
    }
`
export{
    ButtonIcon,
    Image
}