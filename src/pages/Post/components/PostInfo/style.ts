import styled from 'styled-components';

export const PostInfoContainer = styled.div`
  height: 10.5rempx;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  margin-top: -5rem;
  margin-bottom: 4.5rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme['base-profile']};

  aside {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    footer {
      display: flex;
      gap: 0.5rem;
    }
  }
`;

export const Header = styled.header`
  height: 1.25rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
