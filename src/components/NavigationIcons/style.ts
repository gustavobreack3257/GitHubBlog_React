import { styled } from "styled-components";

export const NavigationWeb = styled.div`
    height: 1.25rem;
    width: 4.25rem;

    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-top: 0.5rem;

    p {
        font-weight: ${props => props.theme.FontWeight.bold};
        font-size: ${props => props.theme.FontSize.SS}px !important;
        color: ${props => props.theme.blue}!important;
    }

`