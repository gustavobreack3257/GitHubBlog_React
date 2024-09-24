import { Profile } from './components/Profile';
import * as S from './style';
export function Home() {
  return (
    <S.HomeContainer>
      <S.ProfileContent>
        <Profile />

        <p>Home</p>
      </S.ProfileContent>
    </S.HomeContainer>
  );
}
