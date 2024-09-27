import styled from 'styled-components';

export const PublishCardContainer = styled.button`
  height: 17rem;
  width: 27.6rem;

  display: flex;
  flex-direction: column;
  border: 0;
  border-radius: 0.625rem;
  padding: 2rem;
  gap: 1.25rem;
  background-color: ${(props) => props.theme['base-post']};

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
  }
`;

export const HeaderCard = styled.div`
  height: 4rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
