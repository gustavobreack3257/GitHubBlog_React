import { createContext, ReactNode, useEffect, useState } from 'react';

interface Profiles {
  id: number;
  name: string;
  description: string;
  photo: string;
  github: string;
  gitHubProfile: string;
  enterprise: string;
  followers: string;
}

interface Posts {
  id: number;
  title: string;
  span: string;
  description: string;
  descriptionSubSection: string;
  comments: number;
  createdAt: string;
}

interface ProfilesAndPostsContextType {
  posts: Posts[];
  profiles: Profiles[];
}

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as ProfilesAndPostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [profiles, setProfiles] = useState<Profiles[]>([]);

  async function LoadProfiles() {
    const response = await fetch('http://localhost:3333/profile');
    const data = await response.json();

    setProfiles(data);
  }

  async function LoadPosts() {
    const response = await fetch('http://localhost:3333/posts');
    const data = await response.json();

    setPosts(data);
  }

  useEffect(() => {
    LoadProfiles();
    LoadPosts();
  }, [profiles, posts]);

  return (
    <PostsContext.Provider value={{ profiles, posts }}>
      {children}
    </PostsContext.Provider>
  );
}
