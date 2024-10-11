import { NavLink } from 'react-router-dom';
import { DescriptionText } from '../../../../components/DescriptionText';
import { SubTitle } from '../../../../components/SubTitle';
import { Title } from '../../../../components/Title';
import * as S from './style';
import { PostsProps } from '../../../../contexts/ProfileContext';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface PostCardProps {
  post: PostsProps;
}
export function PublishCard({ post }: PostCardProps) {
  return (
    <>
      <S.PublishCardContainer>
        <NavLink to={`/post/${post.id}`} title={post.title}>
          <S.HeaderCard>
            <Title size="average" title={post.title} />
            <SubTitle
              subtitle={formatDistanceToNow(post.createdAt, {
                addSuffix: true,
                locale: ptBR,
              })}
            />
          </S.HeaderCard>

          <S.Description>{post.description}</S.Description>
        </NavLink>
      </S.PublishCardContainer>
    </>
  );
}
