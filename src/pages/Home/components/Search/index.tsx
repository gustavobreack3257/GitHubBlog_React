import { SubTitle } from '../../../../components/SubTitle';
import * as S from './style';

export function Search() {
  return (
    <S.SearchContainer>
      <S.PublicationsAndNumberOfPublications>
        <h4>Publicações</h4>
        <SubTitle subtitle="6 publicações" />
      </S.PublicationsAndNumberOfPublications>

      <input type="text" placeholder="Buscar conteúdo" />
    </S.SearchContainer>
  );
}
