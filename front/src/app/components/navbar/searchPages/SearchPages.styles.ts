import styled from "styled-components";

const Page = styled.li`
    font-size: 16x;
    border-bottom: transparent solid 2px;
    &:hover{
        border-bottom: #464646 solid 2px
    }
`
const PageContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color:#464646;
    font-weight:600;


`
export {
    Page,
    PageContainer
}