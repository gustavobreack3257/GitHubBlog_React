import * as S from './style';

interface TitleProps {
  title: string;
  size?: S.sizesType;
}
export function Title({ title, size = 'big' }: TitleProps) {
  return (
    <S.TitleContainer sizes={size}>
      <h2>{title}</h2>;
    </S.TitleContainer>
  );
}
