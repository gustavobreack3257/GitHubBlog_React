import { Profile } from './components/Profile';
import { PublishCard } from './components/PublishCard';
import { Search } from './components/Search';
import * as S from './style';
export function Home() {
  return (
    <S.HomeContainer>
      <Profile />
      <Search />

      <S.ContentCard>
        <PublishCard />
      </S.ContentCard>
    </S.HomeContainer>
  );
}
