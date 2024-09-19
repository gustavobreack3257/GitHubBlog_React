import styled from "styled-components";

export const PostContainer = styled.div`
    height: 100px;
    width: 100%;

    p{
        color: ${props => props.theme["base-title"]};
    }
`