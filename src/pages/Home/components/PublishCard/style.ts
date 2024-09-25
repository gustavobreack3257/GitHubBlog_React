import styled from 'styled-components';

export const PublishCardContainer = styled.main`
  height: 17rem;
  width: 27.6rem;

  display: flex;
  border-radius: 0.625rem;
  padding: 2rem;
  gap: 2rem;

  background-color: ${(props) => props.theme['base-post']};
`;

export const HeaderCard = styled.div`
  height: 5.25rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
