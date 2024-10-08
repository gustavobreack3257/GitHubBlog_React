import * as S from './style';

import LogoSVG from '../../assets/Logo.svg';

export function Header() {
  return (
    <S.HeaderContainer>
      <div>
        <img src={LogoSVG} alt="Logo do blog" />
      </div>
    </S.HeaderContainer>
  );
}
