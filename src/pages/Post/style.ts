import styled from 'styled-components';

export const PostContainer = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 16rem;
`;

export const ContentText = styled.section`
  height: 13rem;
  width: auto;

  display: flex;
  flex-direction: column;
  padding: 0 2rem;
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
