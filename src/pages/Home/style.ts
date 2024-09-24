import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 18rem;

  background: transparent;

  p {
    color: ${(props) => props.theme['base-title']};

    font-size: ${(props) => props.theme.FontSize.LG}px;
  }
`;

export const ProfileContent = styled.aside`
  height: 23.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4.5rem;

  //background-color: red;
`;
