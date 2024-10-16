import styled from 'styled-components';

export const ProfileContainer = styled.div`
  height: 13.25rem;
  width: 100%;

  display: grid;
  grid-template-columns: 188px 1fr;
  gap: 2rem;

  padding: 2rem;
  margin-top: -5rem;
  margin-bottom: 4.5rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme['base-profile']};

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
`;

export const HeaderTitle = styled.header`
  height: 2rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  font-weight: ${(props) => props.theme.FontWeight.regular};
  font-size: ${(props) => props.theme.FontSize.MD}px;
  color: ${(props) => props.theme['base-text']};
`;

export const FooterSocialNetworks = styled.div`
  height: 2rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
`;

// color: ${(props) => props.theme.blue};
// font-weight: ${(props) => props.theme.FontWeight.bold};
// font-size: ${(props) => props.theme.FontSize.SS};
