import styled from 'styled-components';

export type sizesType = 'average' | 'big';

interface TitleContainerProps {
  sizes: sizesType;
}
export const TitleContainer = styled.div<TitleContainerProps>`
  height: 2rem;
  width: 18.75rem;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: ${(props) =>
      props.sizes === 'average'
        ? props.theme.FontSize.YG
        : props.theme.FontSize.XL}px;
    font-weight: ${(props) => props.theme.FontWeight.bold};
  }
`;
