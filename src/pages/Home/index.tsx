import { useContext } from 'react';
import { Profile } from './components/Profile';
import { PublishCard } from './components/PublishCard';
import { Search } from './components/Search';
import * as S from './style';
import { PostsContext } from '../../contexts/PostsContext';
export function Home() {
  const { posts } = useContext(PostsContext);
  return (
    <S.HomeContainer>
      <Profile />

      <Search />

      <S.ContentCard>
        {posts.map((post) => {
          return <PublishCard key={post.id} />;
        })}
      </S.ContentCard>
    </S.HomeContainer>
  );
}
