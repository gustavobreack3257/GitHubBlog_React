import * as S from './style';

export function Search() {
  return (
    <S.SearchContainer>
      <S.PublicationsAndNumberOfPublications>
        <h4>Publicações</h4>
        <p>6 publicações</p>
      </S.PublicationsAndNumberOfPublications>

      <input type="text" placeholder="Buscar conteúdo" />
    </S.SearchContainer>
  );
}
