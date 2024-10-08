import * as S from './style';

import { ApplicationIcons } from '../../../../components/ApplicationIcons';
import { DescriptionText } from '../../../../components/DescriptionText';

import { useContext } from 'react';
import { ProfileContext } from '../../../../contexts/ProfileContext';
import { Title } from '../../../../components/Title';
import { NavigationIcons } from '../../../../components/NavigationIcons';

export function Profile() {
  const { profile } = useContext(ProfileContext);

  return (
    <S.ProfileContainer>
      <aside>
        <img src={profile.photo} alt="Imagem do perfil" />
      </aside>

      <S.ContentProfile>
        <S.HeaderTitle>
          <Title size="big" title={profile.name} />;
          <NavigationIcons title="Git Hub" />
        </S.HeaderTitle>

        <DescriptionText />

        <S.FooterSocialNetworks>
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
      </S.ContentProfile>
    </S.ProfileContainer>
  );
}
