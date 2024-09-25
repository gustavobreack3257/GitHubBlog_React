import { SubTitle } from '../../../../components/SubTitle';
import { Title } from '../../../../components/Title';
import * as S from './style';
export function PublishCard() {
  return (
    <S.PublishCardContainer>
      <S.HeaderCard>
        <Title
          title="JavaScript data types and data structures"
          size="average"
        />

        <SubTitle subtitle="há 1 dia" />
      </S.HeaderCard>
    </S.PublishCardContainer>
  );
}
