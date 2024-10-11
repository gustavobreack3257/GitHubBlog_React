import * as S from './style';

import { ApplicationIcons } from '../../../../components/ApplicationIcons';
import { DescriptionText } from '../../../../components/DescriptionText';

import { ProfileProps } from '../../../../contexts/ProfileContext';
import { Title } from '../../../../components/Title';
import { NavigationIcons } from '../../../../components/NavigationIcons';

interface ProfileCardProps {
  profile: ProfileProps;
}
export function Profile({ profile }: ProfileCardProps) {
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

        <S.Description>{profile.description}</S.Description>
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
