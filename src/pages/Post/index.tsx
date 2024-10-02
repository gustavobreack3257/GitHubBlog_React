import { DescriptionText } from '../../components/DescriptionText';
import { PostInfo } from './components/PostInfo';
import * as S from './style';
export function Post() {
  return (
    <S.PostContainer>
      <PostInfo />

      <S.ContentText>
        <DescriptionText variant="post" />
      </S.ContentText>
    </S.PostContainer>
  );
}
