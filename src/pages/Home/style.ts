import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 300px;
    width: 100%;

    background: ${props => props.theme["base-background"]};

    p {
        color: ${props => props.theme["base-title"]
        };
        font-family: "Nunito", sans-serif;
        font-size: ${props => props.theme.FontSize.LG}px;
    }
`