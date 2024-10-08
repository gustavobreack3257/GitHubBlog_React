import { createContext, ReactNode, useEffect, useState } from 'react';

interface Posts {
  id: string;
  title: string;
  span: string;
  description: string;
  descriptionSubSection: string;
  comments: number;
  createdAt: string;
}

interface Profile {
  id: string;
  name: string;
  description: string;
  photo: string;
  github: string;
  gitHubProfile: string;
  enterprise: string;
  followers: string;
  posts: Posts[];
}

interface ProfileContextType {
  profile: Profile;
}

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextType);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<Profile>({} as Profile);

  async function LoadProfile() {
    const response = await fetch(
      'http://localhost:3333/profile/1?_embed=posts',
    );
    const data = await response.json();

    setProfile(data);
  }

  useEffect(() => {
    LoadProfile();
  }, [profile]);

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
}
