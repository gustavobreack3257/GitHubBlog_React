import { ApplicationIcons } from '../../../../components/ApplicationIcons';
import { NavigationIcons } from '../../../../components/NavigationIcons';
import { Title } from '../../../../components/Title';
import * as S from './style';

export function PostInfo() {
  return (
    <S.PostInfoContainer>
      <S.Header>
        <NavigationIcons title="VOLTAR" iconsType="chevronLeft" />
        <NavigationIcons title="VER NO GITHUB" />
      </S.Header>
      <aside>
        <Title title="JavaScript data types and data structures" />

        <footer>
          <ApplicationIcons
            subTitle="gustavobreack3257"
            IconsVariant="gitHub"
          />
          <ApplicationIcons subTitle="Há 1 dia" IconsVariant="calendar" />
          <ApplicationIcons subTitle="5 comentários" IconsVariant="comment" />
        </footer>
      </aside>
    </S.PostInfoContainer>
  );
}
