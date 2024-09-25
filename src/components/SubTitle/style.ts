import styled from 'styled-components';

export const SubTitleContainer = styled.div`
  height: 2rem;
  width: 5.5rem;

  display: flex;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.FontSize.SM}px !important;
    color: ${(props) => props.theme['base-span']} !important;
  }
`;
