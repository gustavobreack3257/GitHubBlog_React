import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  height: 64px;
  width: 100%;
  margin-top: 0.5rem;

  h4 {
    font-size: ${(props) => props.theme.FontSize.MD}px;
    color: ${(props) => props.theme['base-text']};
  }
`;
