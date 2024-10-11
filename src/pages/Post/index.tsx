import { useParams } from 'react-router-dom';
import { PostInfo } from './components/PostInfo';
import * as S from './style';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { PostsProps, ProfileProps } from '../../contexts/ProfileContext';

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ProfilePostProps {
  description: string;
  enterprise: string;
  followers: number;
  gitHubProfile: string;
  github: string;
  id: string;
  name: string;
  photo: string;
}

interface PostProps {
  comments: number;
  createdAt: string;
  description: string;
  descriptionSubSection: string;
  id: string;
  profile: ProfilePostProps;
  profileId: string;
  span: string;

  title: string;
}
export function Post() {
  const [post, setPost] = useState({} as PostProps);
  const { id } = useParams<Record<string, string>>();
  console.log(id);

  const getPost = useCallback(async (id: string) => {
    const response = await api.get(`/posts/${id}`);
    const responseProfile = await api.get(
      `/profile/${response.data.profileId}`,
    );

    const data = {
      ...response.data,
      profile: {
        ...responseProfile.data,
      },
    };
    setPost(data);
    console.log('Banana', data);
  }, []);

  useEffect(() => {
    if (id) {
      getPost(id);
    }
  }, [getPost, id, post]);
  return (
    <>
      {Object.keys(post).length > 0 && (
        <S.PostContainer>
          <PostInfo
            titlePost={post.title}
            gitHubName={post.profile.gitHubProfile}
            duration={formatDistanceToNow(post.createdAt, {
              addSuffix: true,
              locale: ptBR,
            })}
            comments={`${post.comments} Comentários`}
          />

          <S.ContentText>
            <S.PostStyleSection>
              <strong>{post.span}</strong>
              <h4>{post.description}</h4>

              <S.PostStyleSubSection>
                <span>Dynamic typing</span>

                <h4>{post.descriptionSubSection}</h4>
              </S.PostStyleSubSection>
            </S.PostStyleSection>
          </S.ContentText>
        </S.PostContainer>
      )}
    </>
  );
}
