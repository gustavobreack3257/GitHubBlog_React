import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 13.25rem;
  width: 100%;

  display: grid;
  grid-template-columns: 188px 1fr;
  gap: 2rem;
  padding: 2rem;

  aside {
    height: 9.25rem;
    width: 9.25rem;

    overflow: hidden;
    margin-left: 0.5rem;
    //margin: 2.5rem 0 0.5rem 0;

    img {
      height: 9.25rem;
      width: 9.25rem;
      border-radius: 0.5rem;
    }
  }
`;

export const ContentProfile = styled.div`
  height: 8.8125rem;
  width: 100%;

`;
export const HeaderTitle = styled.header`
  height: 2rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    color: ${props => props.theme["base-title"]};
    font-size: ${props => props.theme.FontSize.XL}px;
    font-weight: ${props => props.theme.FontWeight.bold};
  }
`;

export const NavigationWeb = styled.div`
    height: 1.25rem;
    width: 100px;

    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    background-color: black;

    p {
        color: ${props => props.theme.blue};
        font-weight: ${props => props.theme.FontWeight.bold};
        font-size: ${props => props.theme.FontSize.SS};
    }

    img {
        height: 12px;
        width: 12px;
    }
`

export const FooterSocialNetworks = styled.footer`
  height: 1.75rem;
  width: auto;

  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  background-color: red;

  //p {
  //font-size: ${(props) => props.theme.FontSize.MD};
  //}
`;
