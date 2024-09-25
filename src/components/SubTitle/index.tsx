import * as S from './style';

interface SubTitleProps {
  subtitle: string;
}
export function SubTitle({ subtitle }: SubTitleProps) {
  return (
    <S.SubTitleContainer>
      <p>{subtitle}</p>
    </S.SubTitleContainer>
  );
}
