import * as S from './style';
import { NavigationIcons } from '../../../../components/NavigationIcons';
import { Title } from '../../../../components/Title';

export function HeaderTitle() {
  return (
    <S.HeaderTitle>
      <Title />

      <NavigationIcons title="Git Hub" />
    </S.HeaderTitle>
  );
}
