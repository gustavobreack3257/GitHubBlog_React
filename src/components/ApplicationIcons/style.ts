import { styled } from 'styled-components';

export type variantType = 'regular' | 'shadow';

export interface ApplicationIconsContainerProps {
  variant: variantType;
}
export const ApplicationIconsContainer = styled.footer<ApplicationIconsContainerProps>`
  height: 1.75rem;
  width: auto;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    margin-right: 1rem;
    font-size: ${(props) => props.theme.FontSize.MD}px;
    color: ${(props) =>
      props.variant === 'shadow'
        ? props.theme['base-span']
        : props.theme['base-subtitle']};
  }
`;
