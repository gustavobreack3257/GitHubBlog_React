import * as S from './style';

import { ApplicationIcons } from '../../../../components/ApplicationIcons';
import { HeaderTitle } from '../HeaderTitle';
import { DescriptionText } from '../../../../components/DescriptionText';

import { useContext } from 'react';
import { PostsContext } from '../../../../contexts/PostsContext';

export function Profile() {
  const { profiles } = useContext(PostsContext);

  return (
    <S.ProfileContainer>
      <aside>
        {profiles.map((profile) => {
          return (
            <img key={profile.id} src={profile.photo} alt="Imagem do perfil" />
          );
        })}
      </aside>

      <S.ContentProfile>
        <HeaderTitle />

        <DescriptionText />

        {profiles.map((profile) => {
          return (
            <S.FooterSocialNetworks key={profile.id}>
              <ApplicationIcons
                subTitle={profile.gitHubProfile}
                IconsVariant="gitHub"
              />
              <ApplicationIcons
                subTitle={profile.enterprise}
                IconsVariant="building"
              />
              <ApplicationIcons
                subTitle={` ${profile.followers} seguidores`}
                IconsVariant="user"
              />
            </S.FooterSocialNetworks>
          );
        })}
      </S.ContentProfile>
    </S.ProfileContainer>
  );
}
