import { NavLink } from 'react-router-dom';
import { DescriptionText } from '../../../../components/DescriptionText';
import { SubTitle } from '../../../../components/SubTitle';
import { Title } from '../../../../components/Title';
import * as S from './style';
import { useContext } from 'react';
import { ProfileContext } from '../../../../contexts/ProfileContext';
export function PublishCard() {
  const { profile } = useContext(ProfileContext);
  return (
    <S.PublishCardContainer>
      <NavLink to="/Post" title="Publish Card">
        {profile.posts.map((post) => {
          return (
            <S.HeaderCard key={post.id}>
              <Title size="average" title={post.title} />
              <SubTitle subtitle="há 1 dia" />
            </S.HeaderCard>
          );
        })}

        <DescriptionText variant="postCard" />
      </NavLink>
    </S.PublishCardContainer>
  );
}
