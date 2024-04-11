import styled from "styled-components"
const Input= styled.input`
    width: 100%;
    font-size:1rem;
    background-color:#F5F5F5;
    outline: none;
    &:focus-visible{
      
    }
`
const ButtonSearch = styled.button`
    cursor: pointer;
    background-color:#F5F5F5;
`
const SearchBarContainer = styled.div`
    display: flex;
    justify-content:space-between;
    height: 2rem;
    width: 26rem;
    border: 0.5px solid #D4D4D4;
    border-radius:50px;
    padding:  0rem 1rem;
    background-color:#F5F5F5;
`
const Image = styled.img`
    width:20px;
    background-color:#F5F5F5;
`
export{
    Input,
    ButtonSearch,
    SearchBarContainer,
    Image
}