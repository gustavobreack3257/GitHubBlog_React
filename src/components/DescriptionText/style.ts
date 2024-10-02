import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  height: 64px;
  width: 100%;
  margin-top: 0.5rem;

  h4 {
    font-weight: ${(props) => props.theme.FontWeight.regular};
    font-size: ${(props) => props.theme.FontSize.MD}px;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const PostStyleSection = styled.div`
  height: 13rem;
  width: auto;

  display: flex;
  flex-direction: column;

  strong {
    font-weight: ${(props) => props.theme.FontWeight.bold};
    font-size: ${(props) => props.theme.FontSize.MD}px;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const PostStyleSubSection = styled.div`
  height: auto;
  width: auto;

  display: flex;
  flex-direction: column;

  span {
    margin-top: 4rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.blue};
  }
`;
