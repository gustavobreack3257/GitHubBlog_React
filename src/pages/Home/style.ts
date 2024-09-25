import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 16rem;

  background: transparent;

  p {
    color: ${(props) => props.theme['base-title']};

    font-size: ${(props) => props.theme.FontSize.LG}px;
  }
`;

export const ContentCard = styled.div`
  height: auto;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding-bottom: 1rem;
`;
