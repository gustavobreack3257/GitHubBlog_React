import * as S from './style';

import { ApplicationIcons } from '../../../../components/ApplicationIcons';
import { HeaderTitle } from '../HeaderTitle';
import { DescriptionText } from '../../../../components/DescriptionText';
import { useEffect, useState } from 'react';

interface Profiles {
  id: number;
  name: string;
  description: string;
  photo: string;
  github: string;
  gitHubProfile: string;
  enterprise: string;
  followers: string;
}

export function Profile() {
  const [profiles, setProfiles] = useState<Profiles[]>([]);

  async function LoadProfiles() {
    const response = await fetch('http://localhost:3333/profile');
    const data = await response.json();

    setProfiles(data);
  }

  useEffect(() => {
    console.log(profiles);
    LoadProfiles();
  }, [profiles]);
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
