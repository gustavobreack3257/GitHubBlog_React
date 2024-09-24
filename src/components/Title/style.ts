import styled from 'styled-components';

export const TitleContainer = styled.div`
  height: 2rem;
  width: 18.75rem;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: ${(props) => props.theme.FontSize.XL}px;
    font-weight: ${(props) => props.theme.FontWeight.bold};
  }
`;
