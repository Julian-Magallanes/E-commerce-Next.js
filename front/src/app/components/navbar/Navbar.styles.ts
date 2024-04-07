import styled from "styled-components";

const NavbarContainer = styled.div `
    display:flex;
    height: 60px;
    width:100%;
    justify-content:space-between;
    align-items:center;
    background-color:${(props) => props.theme.colors.secondary};
`
export {
    NavbarContainer
}