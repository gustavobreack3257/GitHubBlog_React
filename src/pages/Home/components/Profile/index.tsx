import * as S from './style';

import GitHubSVG from '../../../../assets/githubBrands.svg';
import BuildingSVG from '../../../../assets/buildingSolid.svg';
import UserSVG from '../../../../assets/userGroupSolid.svg';
import { ApplicationIcons } from '../../../../components/ApplicationIcons';
import { HeaderTitle } from '../HeaderTitle';
import { DescriptionText } from '../../../../components/DescriptionText';

export function Profile() {
  return (
    <S.ProfileContainer>
      <aside>
        <img src="https://github.com/gustavobreack3257.png" alt="" />
      </aside>

      <S.ContentProfile>
        <HeaderTitle />

        <DescriptionText />

        <S.FooterSocialNetworks>
          <ApplicationIcons subTitle="gustavobrack3257" IconsVariant="gitHub" />
          <ApplicationIcons subTitle="Rocketseat" IconsVariant="building" />
          <ApplicationIcons subTitle="32 seguidores" IconsVariant="user" />
        </S.FooterSocialNetworks>
      </S.ContentProfile>
    </S.ProfileContainer>
  );
}
