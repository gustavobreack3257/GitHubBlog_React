import * as S from './style';
import { NavigationIcons } from '../../../../components/NavigationIcons';
import { Title } from '../../../../components/Title';
import { useContext } from 'react';
import { PostsContext } from '../../../../contexts/PostsContext';

export function HeaderTitle() {
  const { posts, profiles } = useContext(PostsContext);
  return (
    <S.HeaderTitle>
      {profiles.map((profile) => {
        return <Title size="big" key={profile.id} title={profile.name} />;
      })}

      <NavigationIcons title="Git Hub" />
    </S.HeaderTitle>
  );
}
