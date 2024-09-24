import { Profile } from './components/Profile';
import { Search } from './components/Search';
import * as S from './style';
export function Home() {
  return (
    <S.HomeContainer>
      <S.ProfileContent>
        <Profile />

        <Search />
      </S.ProfileContent>
    </S.HomeContainer>
  );
}
