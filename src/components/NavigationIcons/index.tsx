import * as S from './style';

import GitHubNavIconSVG from '../../assets/arrowUpRightIcon.svg';
import GoBackSVG from '../../assets/chevronLeftSolid.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';

interface NavigationIconsProps {
  title: string;
  iconsType?: 'arrowUP' | 'chevronLeft';
}
export function NavigationIcons({
  title,
  iconsType = 'arrowUP',
}: NavigationIconsProps) {
  const { profile } = useContext(ProfileContext);

  return (
    <>
      {iconsType === 'arrowUP' ? (
        <S.NavigationWeb>
          <p>{title}</p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <img src={GitHubNavIconSVG} alt="Ícone de navegação" />
          </a>
        </S.NavigationWeb>
      ) : (
        <S.NavigationWeb>
          <NavLink to="/" title="Chevron">
            <img src={GoBackSVG} alt="Ícone de navegação" />
          </NavLink>
          <p>{title}</p>
        </S.NavigationWeb>
      )}
    </>
  );
}
