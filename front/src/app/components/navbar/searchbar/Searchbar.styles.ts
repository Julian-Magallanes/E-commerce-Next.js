import styled from "styled-components"
const Input= styled.input`
    width: 100%;
    font-size:1rem;
    
`
const ButtonSearch = styled.button`
    cursor: pointer;
`
const SearchBarContainer = styled.div`
    display: flex;
    justify-content:space-between;
    height: 2rem;
    width: 26rem;
    border: 0.5px solid #757575;
    border-radius:50px;
    padding:  0rem 1rem;
    background-color:#F5F5F5;
`
const Image = styled.img`
    width:20px;
`
export{
    Input,
    ButtonSearch,
    SearchBarContainer,
    Image
}