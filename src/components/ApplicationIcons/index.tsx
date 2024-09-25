import * as S from './style';

import GitHubSVG from '../../assets/githubBrands.svg';
import BuildingSVG from '../../assets/buildingSolid.svg';
import UserSVG from '../../assets/userGroupSolid.svg';
import CalendarSVG from '../../assets/calendarDaySolid.svg';
import CommentSVG from '../../assets/commentSolid.svg';

interface ApplicationIconsProps {
  subTitle: string;
  subTitleVariant?: S.variantType;
  IconsVariant: 'gitHub' | 'building' | 'user' | 'calendar' | 'comment';
}

export function ApplicationIcons({
  subTitleVariant = 'regular',
  IconsVariant,
  subTitle,
}: ApplicationIconsProps) {
  return (
    <S.ApplicationIconsContainer variant={subTitleVariant}>
      {IconsVariant === 'gitHub' ? (
        <img src={GitHubSVG} alt="Icone" />
      ) : IconsVariant === 'building' ? (
        <img src={BuildingSVG} alt="Icone" />
      ) : IconsVariant === 'user' ? (
        <img src={UserSVG} alt="Icone" />
      ) : IconsVariant === 'calendar' ? (
        <img src={CalendarSVG} alt="Icone" />
      ) : (
        <img src={CommentSVG} alt="Icone" />
      )}

      <p>{subTitle}</p>
    </S.ApplicationIconsContainer>
  );
}
