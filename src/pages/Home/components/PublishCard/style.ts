import styled from 'styled-components';

export const PublishCard = styled.main`
  height: 17.5rem;
  width: 26rem;

  display: flex;
  padding: 2rem;
  gap: 1rem;

  background-color: ${(props) => props.theme['base-post']};
`;
