import styled from "styled-components";

const CardContainer = styled.div`
    width: 18rem;
    border: 0.5px solid ${(props) => props.theme.colors.border};
    border-radius:12px;
    height:28rem;
`
const Image = styled.img`
    width:100%;

`
const Price = styled.h1`
    font-size:28px;
`
export {
    CardContainer,
    Image,
    Price
}