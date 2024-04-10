import styled from "styled-components";

const CardContainer = styled.div`
    width: 20rem;
    border: 0.5px solid #757575;
    border-radius:12px;
    height:28rem;
    margin: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Image = styled.img`
    width:100%;

`
const Price = styled.h1`
    font-size:28px;
`
const Title = styled.h4`
    font-size:22px;
`
const Description = styled.p`
    font-size:12px;
    text-align:center;
`
export {
    CardContainer,
    Image,
    Price,
    Title,
    Description
}