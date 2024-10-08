import { useContext, useEffect, useState } from 'react';
import { Profile } from './components/Profile';
import { PublishCard } from './components/PublishCard';
import { Search } from './components/Search';
import * as S from './style';
import { ProfileContext } from '../../contexts/ProfileContext';
export function Home() {
  const { profile } = useContext(ProfileContext);

  return (
    <S.HomeContainer>
      <Profile />

      <Search />

      <S.ContentCard>{profile.posts ? <PublishCard /> : null}</S.ContentCard>
    </S.HomeContainer>
  );
}
