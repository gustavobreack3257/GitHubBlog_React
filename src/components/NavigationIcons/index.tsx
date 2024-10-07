import * as S from './style';

import GitHubNavIconSVG from '../../assets/arrowUpRightIcon.svg';
import GoBackSVG from '../../assets/chevronLeftSolid.svg';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PostsContext } from '../../contexts/PostsContext';

interface NavigationIconsProps {
  title: string;
  iconsType?: 'arrowUP' | 'chevronLeft';
}
export function NavigationIcons({
  title,
  iconsType = 'arrowUP',
}: NavigationIconsProps) {
  const { profiles } = useContext(PostsContext);
  const [path, setPath] = useState('');

  function storingPath() {
    const gitHubPath = profiles.map((profile) => {
      return profile.github;
    });

    const link = gitHubPath.toString();

    setPath(link);
  }

  useEffect(() => {
    storingPath();
  }, [path]);

  return (
    <>
      {iconsType === 'arrowUP' ? (
        <S.NavigationWeb>
          <p>{title}</p>
          <a href={path} target="_blank" rel="noreferrer">
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
