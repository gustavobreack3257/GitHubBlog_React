import * as S from "./style";

import GitHubSVG from "../../../../assets/githubBrands.svg";
import BuildingSVG from "../../../../assets/buildingSolid.svg";
import UserSVG from "../../../../assets/userGroupSolid.svg";
import { NavigationIcons } from "../../../../components/NavigationIcons";


export function Profile() {
  return (
    <S.ProfileContainer>
      <aside>
        <img src="https://github.com/gustavobreack3257.png" alt="" />
      </aside>

      <S.ContentProfile>
        <S.HeaderTitle>
          <h2>Gustavo Costa Souza</h2>

          <NavigationIcons/>
        </S.HeaderTitle>

        <h4>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </h4>

        <S.FooterSocialNetworks>
          <img src={GitHubSVG} />
          <p>gustavobreack3257</p>

          <img src={BuildingSVG} />
          <p>Rocketseat</p>

          <img src={UserSVG} />
          <p>32 seguidores</p>
        </S.FooterSocialNetworks>
      </S.ContentProfile>
    </S.ProfileContainer>
  );
}
