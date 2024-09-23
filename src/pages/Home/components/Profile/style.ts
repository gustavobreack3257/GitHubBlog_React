import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 13.25rem;
  width: 100%;

  display: grid;
  grid-template-columns: 188px 1fr;
  gap: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};

  aside {
    height: 9.25rem;
    width: 9.25rem;

    overflow: hidden;
    margin-left: 0.5rem;

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

  h4 {
    margin-top: 0.5rem;
    font-size: ${(props) => props.theme.FontSize.MD}px;
    color: ${(props) => props.theme["base-text"]};
  }
`;
export const HeaderTitle = styled.header`
  height: 2rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme["base-title"]};
    font-size: ${(props) => props.theme.FontSize.XL}px;
    font-weight: ${(props) => props.theme.FontWeight.bold};
  }
`;

export const FooterSocialNetworks = styled.footer`
  height: 1.75rem;
  width: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.5rem;
  gap: 0.5rem;

  p {
    margin-right: 1rem;
    text-align: center;
    font-size: ${(props) => props.theme.FontSize.MD}px;
  }

  //color: ${(props) => props.theme.blue};
  //font-weight: ${(props) => props.theme.FontWeight.bold};
  //font-size: ${(props) => props.theme.FontSize.SS};
`;
