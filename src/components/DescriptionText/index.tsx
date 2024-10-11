import { useContext } from 'react';
import * as S from './style';
import { ProfileContext } from '../../contexts/ProfileContext';

interface DescriptionProps {
  strong?: string;
  description?: string;
  descriptionSubSection?: string;
  variant?: 'home' | 'postProfile' | 'postCard';
}
export function DescriptionText({
  description,
  descriptionSubSection,
  strong,
  variant = 'home',
}: DescriptionProps) {
  const { profile } = useContext(ProfileContext);
  return (
    <S.DescriptionContainer>
      {variant === 'home' ? (
        <h4>{profile.description}</h4>
      ) : variant === 'postCard' ? (
        <h4>{description}</h4>
      ) : (
        <S.PostStyleSection>
          <strong>{strong}</strong>
          <h4>{description}</h4>

          <S.PostStyleSubSection>
            <span>Dynamic typing</span>

            <h4>{descriptionSubSection}</h4>
          </S.PostStyleSubSection>
        </S.PostStyleSection>
      )}
    </S.DescriptionContainer>
  );
}
