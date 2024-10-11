import { SubTitle } from '../../../../components/SubTitle';
import * as S from './style';
import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../../../../contexts/ProfileContext';

interface SearchProps {
  total: string;
}

export function Search({ total }: SearchProps) {
  const [search, setSearch] = useState('');

  const { searchProfile } = useContext(ProfileContext);

  useEffect(() => {
    console.log('Search', search);
    searchProfile(search);
  }, [search, searchProfile]);
  return (
    <S.SearchContainer>
      <S.PublicationsAndNumberOfPublications>
        <h4>Publicações</h4>
        <SubTitle subtitle={total} />
      </S.PublicationsAndNumberOfPublications>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e) => setSearch(e.target.value)}
      />
    </S.SearchContainer>
  );
}
