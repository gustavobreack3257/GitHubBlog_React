import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 16rem;
`;

export const ContentCard = styled.div`
  height: auto;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding-bottom: 1rem;
`;
