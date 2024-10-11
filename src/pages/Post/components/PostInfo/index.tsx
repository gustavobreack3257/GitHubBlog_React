import { ApplicationIcons } from '../../../../components/ApplicationIcons';
import { NavigationIcons } from '../../../../components/NavigationIcons';
import { Title } from '../../../../components/Title';
import * as S from './style';

interface PostInfoProps {
  titlePost: string;
  gitHubName: string;
  duration: string;
  comments: string;
}
export function PostInfo({
  titlePost,
  gitHubName,
  duration,
  comments,
}: PostInfoProps) {
  return (
    <S.PostInfoContainer>
      <S.Header>
        <NavigationIcons title="VOLTAR" iconsType="chevronLeft" />
        <NavigationIcons title="VER NO GITHUB" />
      </S.Header>
      <aside>
        <Title size="average" title={titlePost} />

        <footer>
          <ApplicationIcons subTitle={gitHubName} IconsVariant="gitHub" />
          <ApplicationIcons subTitle={duration} IconsVariant="calendar" />
          <ApplicationIcons subTitle={comments} IconsVariant="comment" />
        </footer>
      </aside>
    </S.PostInfoContainer>
  );
}
