import * as S from './style';

import GitHubNavIconSVG from '../../assets/arrowUpRightIcon.svg';
import GoBackSVG from '../../assets/chevronLeftSolid.svg';
import { NavLink } from 'react-router-dom';

interface NavigationIconsProps {
  title: string;
  iconsType?: 'arrowUP' | 'chevronLeft';
}
export function NavigationIcons({
  title,
  iconsType = 'arrowUP',
}: NavigationIconsProps) {
  return (
    <>
      {iconsType === 'arrowUP' ? (
        <S.NavigationWeb>
          <p>{title}</p>
          <a
            href="https://github.com/gustavobreack3257"
            target="_blank"
            rel="noreferrer"
          >
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
