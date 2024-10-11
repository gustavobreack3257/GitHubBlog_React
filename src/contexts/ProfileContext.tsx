import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { api } from '../lib/axios';

export interface PostsProps {
  id: string;
  title: string;
  span: string;
  description: string;
  descriptionSubSection: string;
  comments: number;
  createdAt: string;
}

export interface ProfileProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  github: string;
  gitHubProfile: string;
  enterprise: string;
  followers: string;
  posts: PostsProps[];
}

interface ProfileContextType {
  profile: ProfileProps;
  searchProfile: (search: string) => void;
}

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextType);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);
  const [oldProfile, setOldProfile] = useState<ProfileProps>(
    {} as ProfileProps,
  );

  const fetchProfile = useCallback(async () => {
    const response = await api.get(`/profile/1?_embed=posts`);

    setProfile(response.data);
    setOldProfile(response.data);
  }, []);

  const searchProfile = useCallback(
    async (search: string) => {
      // const response = await api.get(`/posts?title_like=^${search}`);
      // console.log('Search dentro2', { r: response.data, s: search });

      setProfile((prevState) => {
        if (Object.keys(prevState).length > 0) {
          return {
            ...prevState,
            posts: search
              ? prevState.posts.filter((post) => post.title.includes(search))
              : oldProfile.posts,
          };
        }

        return prevState;
      });
    },
    [oldProfile.posts],
  );

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <ProfileContext.Provider value={{ profile, searchProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
