import * as S from './style';

interface Props {
  title: string;
  size: S.sizesType;
}
export function Title({ size = 'big', title }: Props) {
  return (
    <S.TitleContainer sizes={size}>
      <h2>{title}</h2>
    </S.TitleContainer>
  );
}
