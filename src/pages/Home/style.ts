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

export const ContentCard = styled.aside`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: red;
`;
