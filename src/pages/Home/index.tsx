import { useContext, useMemo } from 'react';
import { Profile } from './components/Profile';
import { PublishCard } from './components/PublishCard';
import { Search } from './components/Search';
import * as S from './style';
import { ProfileContext } from '../../contexts/ProfileContext';
export function Home() {
  const { profile } = useContext(ProfileContext);
  const total = useMemo(() => {
    if (Object.keys(profile).length > 0) {
      return `${profile.posts.length} ${profile.posts.length === 1 ? 'publicação' : 'publicações'}`;
    }
    return '0 publicações';
  }, [profile]);
  return (
    <S.HomeContainer>
      <Profile profile={profile} />

      <Search total={total} />

      <S.ContentCard>
        {Object.keys(profile).length > 0 &&
          profile.posts.length > 0 &&
          profile.posts.map((post) => (
            <PublishCard key={post.id} post={post} />
          ))}
      </S.ContentCard>
    </S.HomeContainer>
  );
}
