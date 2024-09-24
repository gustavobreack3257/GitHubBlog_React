import * as S from './style';

import GitHubNavIconSVG from '../../assets/arrowUpRightIcon.svg';

interface NavigationIconsProps {
  title: string;
}
export function NavigationIcons({ title }: NavigationIconsProps) {
  return (
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
  );
}
