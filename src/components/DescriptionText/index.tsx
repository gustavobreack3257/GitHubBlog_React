import { useContext } from 'react';
import * as S from './style';
import { ProfileContext } from '../../contexts/ProfileContext';

interface DescriptionProps {
  variant?: 'home' | 'post' | 'postCard';
}
export function DescriptionText({ variant = 'home' }: DescriptionProps) {
  const { profile } = useContext(ProfileContext);
  return (
    <S.DescriptionContainer>
      {variant === 'home' ? (
        <h4>{profile.description}</h4>
      ) : variant === 'postCard' ? (
        <h4>
          Todas as linguagens de programação possuem estruturas de dados
          integradas, mas geralmente diferem de uma linguagem para outra. Este
          artigo tenta listar as estruturas de dados integradas disponíveis em
          JavaScript e quais propriedades elas possuem. Eles podem ser usados
          para construir outras estruturas de dados. Sempre que possível, são
          feitas comparações com outras línguas.
        </h4>
      ) : (
        <S.PostStyleSection>
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>
          <h4>
            This article attempts to list the built-in data structures available
            in JavaScript and what properties they have. These can be used to
            build other data structures. Wherever possible, comparisons with
            other languages are drawn.
          </h4>

          <S.PostStyleSubSection>
            <span>Dynamic typing</span>

            <h4>
              JavaScript is a loosely typed and dynamic language. Variables in
              JavaScript are not directly associated with any particular value
              type, and any variable can be assigned (and re-assigned) values of
              all types:
            </h4>
          </S.PostStyleSubSection>
        </S.PostStyleSection>
      )}
    </S.DescriptionContainer>
  );
}
